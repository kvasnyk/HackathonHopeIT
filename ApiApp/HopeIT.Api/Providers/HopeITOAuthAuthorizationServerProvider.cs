using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System.Threading.Tasks;

namespace HopeIT.Api.Providers
{
    public class HopeITOAuthAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();

            var user = await userManager.FindAsync(context.UserName, context.Password);

            if(user == null)
            {
                context.Rejected();
                return;
            }

            // #TODO# check if e-mail is confirmed

            var identity = await userManager.CreateIdentityAsync(user, "JWT");

            var ticket = new AuthenticationTicket(identity, new AuthenticationProperties());
            context.Validated(ticket);
        }
    }
}