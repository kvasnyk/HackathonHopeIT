using System.Collections.Generic;

namespace HopeIT.Api.BindingModels
{
    public class SendMessageBindingModel
    {
        public string Subject { get; set; }

        public string Content { get; set; }

        public List<string> Recipients { get; set; }
    }
}