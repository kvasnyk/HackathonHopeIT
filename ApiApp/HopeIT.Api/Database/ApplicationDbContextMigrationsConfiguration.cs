using HopeIT.Api.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
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

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            context.Roles.AddOrUpdate(x => x.Name, new IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "Admin"
            });

            context.Roles.AddOrUpdate(x => x.Name, new IdentityRole
            {
                Id = Guid.NewGuid().ToString(),
                Name = "User"
            });

            var adminUser = new ApplicationUser
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
            };

            context.Users.AddOrUpdate(x => x.UserName, adminUser);
            context.SaveChanges();

            userManager.AddToRole(adminUser.Id, "Admin");

            for(int i = 1; i <= 100; i++)
            {
                var testUser = new ApplicationUser
                {
                    Id = Guid.NewGuid().ToString(),
                    UserName = $"testuser{i}",
                    Email = $"testuser{i}@fakemail.fake",
                    EmailConfirmed = true,
                    PasswordHash = "ACMbNCBVgLot8XH3BMFVPyFLz9CHoSV/Z0NbM2dhwYvPpxrZPhyjZKg0ZDiM1CHgOg==",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    AccessFailedCount = 0,
                    PhoneNumber = "+48 123 456 789",
                    PhoneNumberConfirmed = true,
                    LockoutEnabled = false
                };

                context.Users.AddOrUpdate(x => x.UserName, testUser);
                context.SaveChanges();

                userManager.AddToRole(testUser.Id, "User");
            }
        }
    }
}