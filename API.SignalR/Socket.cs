using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Web.Http.Cors;

namespace API.SignalR
{
    
    public class Socket : Hub
    {
        public void Refresh()
        {
            Clients.Others.Refresh("Refreshed");            
        }
        public void Delete()
        {
            Clients.Others.Delete("Delete");
        }
    }
}