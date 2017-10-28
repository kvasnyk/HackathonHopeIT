using HopeIT.Api.Database;
using HopeIT.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<Message>> GetAllMessagesAsync()
        {
            return _context.Messages.ToList();
        }

        public async Task<Message> Get(Guid id)
        {
            return _context.Messages.SingleOrDefault(x => x.Id == id);
        }
    }
}