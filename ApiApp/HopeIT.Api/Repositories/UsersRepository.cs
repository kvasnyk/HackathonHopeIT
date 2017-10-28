using HopeIT.Api.Database;
using HopeIT.Api.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace HopeIT.Api.Repositories
{
    public class UsersRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<ApplicationUser>> GetAllUsersAsync()
        {
            var userRole = await _context.Roles.SingleAsync(r => r.Name == "User");
            return _context.Users.Where(x => x.Roles.Any(r => r.RoleId == userRole.Id)).ToList();
        }
    }
}