using API.BL;
using API.BL.Interface;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API.Model;
using System.Web.Http.Cors;
using System.Collections.Generic;

namespace API.SignalR.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : SignalControllerWithHub<Socket>
    {
        IAccountBL _account;
        public AccountController()
        {
            _account = new AccountBL();
        }

        [HttpGet]
        [Route("Get")]      
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, _account.Get());
        }

        [HttpPost]
        [Route("Save")]
        public HttpResponseMessage Save(AccountModel model)
        {
            bool suucess= _account.Save(model);
            Hub.Clients.All.Refresh("OK");
            return Request.CreateResponse(HttpStatusCode.OK, suucess);
        }

        [HttpGet]
        [Route("Update/Account/{AccountNumber}/Amount/{Amount}")]
        public HttpResponseMessage Update(string AccountNumber, string Amount)
        {
            
            return Request.CreateResponse(HttpStatusCode.OK, _account.Update(AccountNumber,Amount));
        }

        [HttpGet]
        [Route("Delete/Account/{AccountNumber}")]
        public HttpResponseMessage Delete(string AccountNumber)
        {
           
             bool Send= _account.Delete(AccountNumber);
             Hub.Clients.All.Refresh("OK");
             return Request.CreateResponse(HttpStatusCode.OK, Send);
        }
    }
}
