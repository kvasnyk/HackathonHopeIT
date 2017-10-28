using HopeIT.Api.Database;
using HopeIT.Api.Repositories;
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

            return Ok(allUsers);
        }
    }
}