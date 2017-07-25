using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;

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
            return true;
        }

    }

}