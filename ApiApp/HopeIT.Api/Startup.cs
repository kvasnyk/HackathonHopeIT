using HopeIT.Api.Database;
using HopeIT.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System.Configuration;
using System.Threading.Tasks;
using System.Web;
using System.Web.Cors;
using System.Web.Http;

[assembly: OwinStartup(typeof(HopeIT.Api.Startup))]

namespace HopeIT.Api
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            app.CreatePerOwinContext(() => new ApplicationDbContext());
            app.CreatePerOwinContext(() => new UserStore<ApplicationUser>(HttpContext.Current.GetOwinContext().Get<ApplicationDbContext>()));
            app.CreatePerOwinContext(() => new ApplicationUserManager(HttpContext.Current.GetOwinContext().Get<UserStore<ApplicationUser>>()));

            ConfigureCors(app);
            ConfigureAuth(app);

            WebApiConfig.Register(config);
            app.UseWebApi(config);
        }

        private void ConfigureCors(IAppBuilder app)
        {
            var corsPolicy = new CorsPolicy
            {
                AllowAnyHeader = true,
                AllowAnyMethod = true,
            };

            var webUiClientUrl = ConfigurationManager.AppSettings["WebClientURL"];
            corsPolicy.Origins.Add(webUiClientUrl);

            var corsOptions = new CorsOptions
            {
                PolicyProvider = new CorsPolicyProvider
                {
                    PolicyResolver = context => Task.FromResult(corsPolicy)
                }
            };

            app.UseCors(corsOptions);
        }
    }
}
