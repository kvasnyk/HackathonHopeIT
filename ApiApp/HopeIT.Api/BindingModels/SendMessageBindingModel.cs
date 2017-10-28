using System.Collections.Generic;
using HopeIT.Api.Models;

namespace HopeIT.Api.BindingModels
{
    public class SendMessageBindingModel
    {
        public string Subject { get; set; }

        public string Content { get; set; }

        public List<string> Recipients { get; set; }

        public List<File> Files { get; set; }
    }
}