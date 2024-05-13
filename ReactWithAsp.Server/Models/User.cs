using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ReactWithAsp.Server.Models
{
    public class User
    {
        [Key]
        [Required]
        public string Mobile { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Course { get; set; }
        public bool? Isadmin { get; set; }
        public string? address { get; set; }
        public string? OTP { get; set; }
    }
    public class Login
    {
        public string mobile { get; set; }
    }
}
