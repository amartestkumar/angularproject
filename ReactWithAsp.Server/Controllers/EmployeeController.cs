using Microsoft.AspNetCore.Mvc;
using ReactWithAsp.Server.Models;

namespace ReactWithAsp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly ApplicationDbContext dbContext;
        public EmployeeController(ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }
        [HttpPost]
        public IActionResult SubmitForm([FromBody] FormData formData)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            dbContext.forms.Add(formData);
            dbContext.SaveChanges();
            return Ok(formData);
        }
        [HttpGet]
        public ActionResult GetAllEmployeeData()
        {
            var data= dbContext.forms.ToList();
            try
            {
                if (data != null)
                {
                    return Ok(data);
                }
                return NotFound();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
