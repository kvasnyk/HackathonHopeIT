using HopeIT.Api.Database;
using HopeIT.Api.Models;
using System.Threading.Tasks;

namespace HopeIT.Api.Repositories
{
    public class MessageRecipientsRepository
    {
        private readonly ApplicationDbContext _context;

        public MessageRecipientsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(MessageRecipient messageRecipient)
        {
            _context.MessageRecipients.Add(messageRecipient);
            await _context.SaveChangesAsync();
        }
    }
}