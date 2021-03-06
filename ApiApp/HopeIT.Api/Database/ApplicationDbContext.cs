﻿using HopeIT.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace HopeIT.Api.Database
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Message> Messages { get; set; }

        public DbSet<MessageRecipient> MessageRecipients { get; set; }

        static ApplicationDbContext()
        {
            System.Data.Entity.Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, ApplicationDbContextMigrationsConfiguration>(true));
        }

        public ApplicationDbContext() : base("DefaultConnection")
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Message>().ToTable("Messages");
            modelBuilder.Entity<Message>().HasKey(x => x.Id);

            modelBuilder.Entity<MessageRecipient>().ToTable("MessageRecipients");
            modelBuilder.Entity<MessageRecipient>().HasKey(x => x.Id);
            modelBuilder.Entity<MessageRecipient>().HasRequired(x => x.Message).WithMany(x => x.MessageRecipients).HasForeignKey(x => x.MessageId).WillCascadeOnDelete(false);
            modelBuilder.Entity<MessageRecipient>().HasRequired(x => x.Recipient).WithMany(x => x.MessageRecipients).HasForeignKey(x => x.RecipientId).WillCascadeOnDelete(false);

            modelBuilder.Entity<File>().ToTable("Files");
            modelBuilder.Entity<File>().HasKey(x => x.Id);
            modelBuilder.Entity<File>().HasRequired(x => x.Message).WithMany(x => x.Files).HasForeignKey(x => x.MessageId).WillCascadeOnDelete(false);
        }
    }
}