using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace API.SignalR
{
    public class Socket : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}