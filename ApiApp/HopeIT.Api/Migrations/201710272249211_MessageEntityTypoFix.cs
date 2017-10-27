namespace HopeIT.Api.Database
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MessageEntityTypoFix : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Messages", "SentOn", c => c.DateTime(nullable: false));
            DropColumn("dbo.Messages", "SendOn");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Messages", "SendOn", c => c.DateTime(nullable: false));
            DropColumn("dbo.Messages", "SentOn");
        }
    }
}
