using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace HopeIT.Api.App_Start
{
    public class Filter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            int x;
            if (actionContext.ModelState.IsValid) x = 2;
        }
    }
}