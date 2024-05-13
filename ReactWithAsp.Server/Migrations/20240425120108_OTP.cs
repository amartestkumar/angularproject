using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactWithAsp.Server.Migrations
{
    public partial class OTP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OTP",
                table: "users",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OTP",
                table: "users");
        }
    }
}
