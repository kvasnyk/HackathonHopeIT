using System.Threading.Tasks;
using System.Web.Http;

namespace HopeIT.Api.Controllers
{
    [Authorize]
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        [Route("send")]
        public async Task<IHttpActionResult> SendMessageAsync()
        {
            return Ok();
        }
    }
}