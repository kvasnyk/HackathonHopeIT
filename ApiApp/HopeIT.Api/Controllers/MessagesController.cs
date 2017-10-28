using HopeIT.Api.BindingModels;
using HopeIT.Api.Database;
using HopeIT.Api.Models;
using HopeIT.Api.ReadModels;
using HopeIT.Api.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace HopeIT.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {
        private readonly MessagesRepository _messagesRepository;
        private readonly MessageRecipientsRepository _messageRecipientsRepository;

        public MessagesController()
        {
            _messagesRepository = new MessagesRepository(new ApplicationDbContext());
            _messageRecipientsRepository = new MessageRecipientsRepository(new ApplicationDbContext());
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("send")]
        public async Task<IHttpActionResult> SendMessageAsync(SendMessageBindingModel model)
        {
            var message = new Message
            {
                Id = Guid.NewGuid(),
                Subject = model.Subject,
                Content = model.Content,
                SentOn = DateTime.UtcNow
            };
            await _messagesRepository.AddAsync(message);

            foreach(var recipientId in model.Recipients)
            {
                var messageRecipient = new MessageRecipient
                {
                    Id = Guid.NewGuid(),
                    MessageId = message.Id,
                    RecipientId = recipientId,
                    HasBeenRead = false
                };

                await _messageRecipientsRepository.AddAsync(messageRecipient);
            }

            return Ok();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("")]
        public async Task<IHttpActionResult> FindMessagesAsync(FindMessagesBindingModel model)
        {
            var allMessages = await _messagesRepository.GetAllMessagesAsync();
            var result = allMessages.OrderByDescending(x => x.SentOn).Skip(model.PageNumber * 10 - 10).Take(10).Select(x => new MessageReadModel
            {
                Id = x.Id,
                Subject = x.Subject,
                Content = x.Content,
                SentOn = x.SentOn.ToString("dd.MM.yyyy"),
                RecipientNames = x.MessageRecipients.Select(y => y.Recipient.UserName).ToList()
            });

            return Ok(result);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("{messageId}")]
        public async Task<IHttpActionResult> GetMessageAsync(Guid messageId)
        {
            var entity = await _messagesRepository.Get(messageId);

            var message = new MessageReadModel
            {
                Id = entity.Id,
                Subject = entity.Subject,
                Content = entity.Content,
                SentOn = entity.SentOn.ToString("dd.MM.yyyy"),
                RecipientNames = entity.MessageRecipients.Select(y => y.Recipient.UserName).ToList()
            };

            return Ok(message);
        }
    }
}