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
            context.Validated();
        }
    }
}