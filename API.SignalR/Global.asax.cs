using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace API.SignalR
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {           
            GlobalConfiguration.Configure(WebApiConfig.Register);           
        }
        //protected void Application_BeginRequest()
        //{
        //    if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
        //    {
        //        //// These headers are handling the "pre-flight" OPTIONS call sent by the browser
        //        HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "*");
        //        HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
        //        HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
        //        HttpContext.Current.Response.End();
        //    }
        //}
    }
}
