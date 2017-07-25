using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Linq;
namespace API.SignalR
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    internal class Secure : AuthorizeAttribute
    {
        public override bool AuthorizeHubMethodInvocation(Microsoft.AspNet.SignalR.Hubs.IHubIncomingInvokerContext hubIncomingInvokerContext, bool appliesToMethod)
        {
            return true;
        }

        public override bool AuthorizeHubConnection(HubDescriptor hubDescriptor, IRequest request)
        {
            if (!request.Headers.Any(x => x.Key == "Authorization"))
            {
                return false;
            }
            return true;
        }

    }

}