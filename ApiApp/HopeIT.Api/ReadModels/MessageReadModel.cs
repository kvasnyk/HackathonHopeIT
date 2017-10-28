using System;
using System.Collections.Generic;

namespace HopeIT.Api.ReadModels
{
    public class MessageReadModel
    {
        public Guid Id { get; set; }

        public string Subject { get; set; }

        public string Content { get; set; }

        public string SentOn { get; set; }

        public List<string> RecipientNames { get; set; }
    }
}