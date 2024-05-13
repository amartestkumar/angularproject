using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactWithAsp.Server.Models;

namespace ReactWithAsp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ApplicationDbContext _LoginDBcontext;
        public LoginController(ApplicationDbContext _LoginDBcontext)
        {
            this._LoginDBcontext = _LoginDBcontext;
        }
        [HttpGet]
        public ActionResult Login(string mobileno)
        {
            try
            {
                 var alldata=_LoginDBcontext.users.Where(u=>u.Mobile==mobileno);
                if (alldata != null)
                {
                    return Ok(alldata);
                }
               return BadRequest();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest();
        }
    }
}
