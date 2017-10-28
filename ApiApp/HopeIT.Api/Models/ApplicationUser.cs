using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;

namespace HopeIT.Api.Models
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<MessageRecipient> MessageRecipients { get; set; }
    }
}