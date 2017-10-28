using System;
using System.Collections.Generic;

namespace HopeIT.Api.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public string Subject { get; set; }

        public string Content { get; set; }

        public DateTime SentOn { get; set; }

        public virtual ICollection<MessageRecipient> MessageRecipients { get; set; }
    }
}