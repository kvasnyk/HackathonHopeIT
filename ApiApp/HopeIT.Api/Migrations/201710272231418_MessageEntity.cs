namespace HopeIT.Api.Database
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MessageEntity : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Messages",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Subject = c.String(),
                        Content = c.String(),
                        SendOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Messages");
        }
    }
}
