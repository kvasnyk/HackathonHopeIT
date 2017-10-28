using System;

namespace HopeIT.Api.Models
{
    public class MessageRecipient
    {
        public Guid Id { get; set; }

        public Guid MessageId { get; set; }

        public virtual Message Message { get; set; }

        public string RecipientId { get; set; }

        public virtual ApplicationUser Recipient { get; set; }

        public bool HasBeenRead { get; set; }
    }
}