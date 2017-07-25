using System;
using System.Collections.Generic;
using System.IdentityModel.Claims;
using System.IdentityModel.Protocols.WSTrust;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Web;

namespace API.UI.App_Start
{
    public static class Token
    {
        public static string Generate()
        {
            var plainTextSecurityKey = "ABCD-12134-HAGS-JKSJA57";
            var signingKey = new InMemorySymmetricSecurityKey(Encoding.UTF8.GetBytes(plainTextSecurityKey));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature, SecurityAlgorithms.Sha256Digest);
            //Saml Decrypt
            var claimsIdentity = new ClaimsIdentity(new List<System.Security.Claims.Claim>()
            {
                new System.Security.Claims.Claim("Name","Ahmar"),
                new System.Security.Claims.Claim("Email","Ahmar@Gmail.com"),

            }, "Custom");

            var securityTokenDescriptor = new SecurityTokenDescriptor()
            {
                AppliesToAddress = "http://localhost:52108/",
                TokenIssuerName = "http://localhost:52286",
                Subject = claimsIdentity,
                SigningCredentials = signingCredentials,
                Lifetime = new Lifetime(DateTime.Now, DateTime.Now.AddMinutes(2)),

            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var plainToken = tokenHandler.CreateToken(securityTokenDescriptor);
            var signedAndEncodedToken = tokenHandler.WriteToken(plainToken);
            return signedAndEncodedToken;
        }
    }
}