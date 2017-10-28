using HopeIT.Api.Database;
using HopeIT.Api.ReadModels;
using HopeIT.Api.Repositories;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace HopeIT.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        private readonly UsersRepository _usersRepository;

        public UsersController()
        {
            _usersRepository = new UsersRepository(new ApplicationDbContext());
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        [Route("")]
        public async Task<IHttpActionResult> FindUsersAsync()
        {
            var allUsers = await _usersRepository.GetAllUsersAsync();
            var result = allUsers.OrderBy(x => x.UserName).Select(x => new UserReadModel
            {
                Id = x.Id,
                UserName = x.UserName,
                Email = x.Email,
                MessagesCount = x.MessageRecipients.Count,
                DonationsCount = 1500.24f
            });

            return Ok(result);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("{userId}")]
        public async Task<IHttpActionResult> GetUserAsync(string userId)
        {
            var entity = await _usersRepository.Get(userId);

            var user = new UserReadModel
            {
                Id = entity.Id,
                UserName = entity.UserName,
                Email = entity.Email,
                MessagesCount = entity.MessageRecipients.Count,
                DonationsCount = 1500.24f,
                Messages = entity.MessageRecipients.Select(x => new MessageReadModel
                {
                    Id = x.Message.Id,
                    Subject = x.Message.Subject,
                    Content = x.Message.Content,
                    SentOn = x.Message.SentOn.ToString("dd.MM.yyyy")
                }).ToList()
            };

            return Ok(user);
        }
    }
}