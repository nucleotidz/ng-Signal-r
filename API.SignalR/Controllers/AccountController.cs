using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.SignalR.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        [HttpGet]
        [Route("Get")]
        public HttpResponseMessage Get()
        {
          return  Request.CreateResponse(HttpStatusCode.OK, "Ahmar");
        }
    }
}
