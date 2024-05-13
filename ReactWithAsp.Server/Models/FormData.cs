using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ReactWithAsp.Server.Models
{
    public class FormData
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Define Id as primary key with identity
        public int Id { get; set; }

        public string Employeename { get; set; }
        public string Employeeaddress { get; set; }
    }
}
