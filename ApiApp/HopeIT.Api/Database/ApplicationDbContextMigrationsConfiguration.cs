using HopeIT.Api.Models;
using System.Data.Entity.Migrations;

namespace HopeIT.Api.Database
{
    internal sealed class ApplicationDbContextMigrationsConfiguration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public ApplicationDbContextMigrationsConfiguration()
        {
            AutomaticMigrationsEnabled = false;
            AutomaticMigrationDataLossAllowed = false;
            CommandTimeout = 600;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            base.Seed(context);

            context.Users.AddOrUpdate(x => x.UserName, new ApplicationUser
            {
                Id = "F5184C6A-528E-488A-B57C-B4CA5DBD2DD4",
                UserName = "admin",
                Email = "admin@fakemail.fake",
                EmailConfirmed = true,
                PasswordHash = "ACMbNCBVgLot8XH3BMFVPyFLz9CHoSV/Z0NbM2dhwYvPpxrZPhyjZKg0ZDiM1CHgOg==",
                SecurityStamp = "c34ed5a3-0056-4c78-a82b-afee8e3037dc",
                AccessFailedCount = 0,
                PhoneNumber = "+48 123 456 789",
                PhoneNumberConfirmed = true,
                LockoutEnabled = false
            });
        }
    }
}