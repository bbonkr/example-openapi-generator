using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExampleApp.Controllers
{
    public class HomeController:Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }
    }
}
