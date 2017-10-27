using HopeIT.Api.BindingModels;
using HopeIT.Api.Database;
using HopeIT.Api.Models;
using HopeIT.Api.Repositories;
using System;
using System.Threading.Tasks;
using System.Web.Http;

namespace HopeIT.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {
        private readonly MessagesRepository _messagesRepository;

        public MessagesController()
        {
            _messagesRepository = new MessagesRepository(new ApplicationDbContext());
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

            return Ok();
        }
    }
}