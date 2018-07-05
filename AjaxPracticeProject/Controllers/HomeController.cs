using Microsoft.AspNetCore.Mvc;
using AjaxPracticeProject.Models;

namespace AjaxPracticeProject.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult HelloAjax()
        {
            return Content("Hello from the controller!", "text/plain");
        }

        public ActionResult Sum(int firstNumber, int secondNumber)
        {
            return Content((firstNumber + secondNumber).ToString(), "text/plain");
        }

        public ActionResult DisplayObject()
        {
            Destination destination = new Destination("Tokyo", "Japan", 1);
            return Json(destination);
        }
    }
}
