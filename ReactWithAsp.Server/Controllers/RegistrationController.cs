using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactWithAsp.Server.Models;

namespace ReactWithAsp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public RegistrationController(ApplicationDbContext _context)
        {
        
            this._context=_context;
        }
        [HttpPost]
        public ActionResult Register(User model)
        {
            try
            {
                if(model!=null)
                {
                    _context.users.Add(model);
                    _context.SaveChanges();
                    return Ok(model);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
