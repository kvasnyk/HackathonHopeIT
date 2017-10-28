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

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("test")]
        public async Task<IHttpActionResult> FindUsersAsync()
        {
            var allUsers = await _usersRepository.GetAllUsersAsync();
            var result = allUsers.OrderBy(x => x.UserName).Select(x => new UserReadModel
            {
                Id = x.Id,
                UserName = x.UserName
            });

            return Ok(result);
        }
    }
}