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
        }
    }
}