using Microsoft.EntityFrameworkCore;
using System.Data;

namespace ReactWithAsp.Server.Models
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options) 
        {
        }
      public DbSet<FormData> forms { get; set; }
      public DbSet<User>users { get; set; } 
    }
}
