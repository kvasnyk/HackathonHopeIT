namespace HopeIT.Api.Database
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Files : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Files",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Content = c.String(),
                        MessageId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Messages", t => t.MessageId)
                .Index(t => t.MessageId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Files", "MessageId", "dbo.Messages");
            DropIndex("dbo.Files", new[] { "MessageId" });
            DropTable("dbo.Files");
        }
    }
}
