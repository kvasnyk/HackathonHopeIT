using Microsoft.Owin.Security;
using System;
using System.IdentityModel.Tokens;
using Thinktecture.IdentityModel.Tokens;

namespace HopeIT.Api.Providers
{
    public class HopeITJWTFormat : ISecureDataFormat<AuthenticationTicket>
    {
        private readonly string _issuer;
        private readonly string _audience;
        private readonly byte[] _secret;

        public HopeITJWTFormat(string issuer, string audience, byte[] secret)
        {
            _issuer = issuer;
            _audience = audience;
            _secret = secret;
        }

        public string Protect(AuthenticationTicket data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            var signingKey = new HmacSigningCredentials(_secret);
            var issued = data.Properties.IssuedUtc;
            var expires = data.Properties.ExpiresUtc;

            var token = new JwtSecurityToken(_issuer, _audience, data.Identity.Claims, issued.Value.UtcDateTime, expires.Value.UtcDateTime, signingKey);
            var handler = new JwtSecurityTokenHandler();

            var jwt = handler.WriteToken(token);
            return jwt;
        }

        public AuthenticationTicket Unprotect(string protectedText)
        {
            throw new NotImplementedException();
        }
    }
}