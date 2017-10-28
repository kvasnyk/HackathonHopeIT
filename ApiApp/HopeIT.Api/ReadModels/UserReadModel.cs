using System.Collections.Generic;

namespace HopeIT.Api.ReadModels
{
    public class UserReadModel
    {
        public string Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public int MessagesCount { get; set; }

        public float DonationsCount { get; set; }

        public List<MessageReadModel> Messages { get; set; }
    }
}