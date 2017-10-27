using System;

namespace HopeIT.Api.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public string Subject { get; set; }

        public string Content { get; set; }

        public DateTime SentOn { get; set; }
    }
}