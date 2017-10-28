namespace HopeIT.Api.Database
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CascadeDeleteUpdate : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.MessageRecipients", "MessageId", "dbo.Messages");
            DropForeignKey("dbo.MessageRecipients", "RecipientId", "dbo.AspNetUsers");
            AddForeignKey("dbo.MessageRecipients", "MessageId", "dbo.Messages", "Id");
            AddForeignKey("dbo.MessageRecipients", "RecipientId", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MessageRecipients", "RecipientId", "dbo.AspNetUsers");
            DropForeignKey("dbo.MessageRecipients", "MessageId", "dbo.Messages");
            AddForeignKey("dbo.MessageRecipients", "RecipientId", "dbo.AspNetUsers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.MessageRecipients", "MessageId", "dbo.Messages", "Id", cascadeDelete: true);
        }
    }
}
