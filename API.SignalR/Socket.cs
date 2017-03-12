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
        public void Refresh(string name)
        {
            Clients.Others.Refresh("Refreshed by " + name);            
        }
        public void Delete(string name)
        {
            Clients.Others.Delete("Delete");
        }
    }
}