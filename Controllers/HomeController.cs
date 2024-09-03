using Javascrpit.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Javascrpit.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
