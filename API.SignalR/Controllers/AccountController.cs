using API.BL;
using API.BL.Interface;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API.Model;
using System.Web.Http.Cors;

namespace API.SignalR.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
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
            return Request.CreateResponse(HttpStatusCode.OK, _account.Save(model));
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
            return Request.CreateResponse(HttpStatusCode.OK, _account.Delete(AccountNumber));
        }
    }
}
