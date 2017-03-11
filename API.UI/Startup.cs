using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(API.UI.Startup))]
namespace API.UI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
           
        }
    }
}
