using HopeIT.Api.Database;
using HopeIT.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Owin;
using System.Web;

[assembly: OwinStartup(typeof(HopeIT.Api.Startup))]

namespace HopeIT.Api
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext(() => new ApplicationDbContext());
            app.CreatePerOwinContext(() => new UserStore<ApplicationUser>(HttpContext.Current.GetOwinContext().Get<ApplicationDbContext>()));
            app.CreatePerOwinContext(() => new ApplicationUserManager(HttpContext.Current.GetOwinContext().Get<UserStore<ApplicationUser>>()));

            ConfigureAuth(app);
        }
    }
}
