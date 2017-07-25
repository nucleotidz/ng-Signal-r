using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Text;
using System.Web;

namespace API.SignalR.App_Start
{
    public static class Token
    {
        public static bool Challenge(string token)
        {
            try
            {
                var plainTextSecurityKey = "ABCD-12134-HAGS-JKSJA57";
                var signingKey = new InMemorySymmetricSecurityKey(Encoding.UTF8.GetBytes(plainTextSecurityKey));
                var tokenValidationParameters = new TokenValidationParameters()
                {
                    ValidAudiences = new string[] { "http://localhost:52108/" },
                    ValidIssuers = new string[] { "http://localhost:52286" },
                    IssuerSigningKey = signingKey
                };
                SecurityToken validatedToken;
                var tokenHandler = new JwtSecurityTokenHandler();
                tokenHandler.ValidateToken(token, tokenValidationParameters, out validatedToken);
                return true;
            }
            catch
            {

                return false;
            }
        }

    }
}