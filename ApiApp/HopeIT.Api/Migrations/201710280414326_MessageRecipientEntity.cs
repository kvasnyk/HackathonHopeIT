namespace HopeIT.Api.Database
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MessageRecipientEntity : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MessageRecipients",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        MessageId = c.Guid(nullable: false),
                        RecipientId = c.String(nullable: false, maxLength: 128),
                        HasBeenRead = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Messages", t => t.MessageId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.RecipientId, cascadeDelete: true)
                .Index(t => t.MessageId)
                .Index(t => t.RecipientId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MessageRecipients", "RecipientId", "dbo.AspNetUsers");
            DropForeignKey("dbo.MessageRecipients", "MessageId", "dbo.Messages");
            DropIndex("dbo.MessageRecipients", new[] { "RecipientId" });
            DropIndex("dbo.MessageRecipients", new[] { "MessageId" });
            DropTable("dbo.MessageRecipients");
        }
    }
}
