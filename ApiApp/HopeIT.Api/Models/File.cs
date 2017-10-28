using System;

namespace HopeIT.Api.Models
{
    public class File
    {  
        public Guid Id { get; set; }

        public string Content { get; set; }

        public Guid MessageId { get; set; }

        public virtual Message Message { get; set; }
    }
}