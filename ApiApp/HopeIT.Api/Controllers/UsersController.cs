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
    }
}