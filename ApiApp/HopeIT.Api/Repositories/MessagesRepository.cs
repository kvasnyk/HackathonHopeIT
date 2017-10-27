using HopeIT.Api.Database;
using HopeIT.Api.Models;
using System.Threading.Tasks;

namespace HopeIT.Api.Repositories
{
    public class MessagesRepository 
    {
        private readonly ApplicationDbContext _context;

        public MessagesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddAsync(Message message)
        {
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();
        }
    }
}