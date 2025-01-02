using Microsoft.AspNetCore.Mvc;
using VideoStreamShare.Data;

namespace VideoStreamShare.Controllers;

[ApiController]
[Route("[controller]")]
public class RoomController : Controller {
    private readonly ApplicationDbContext _context;

    public RoomController(ApplicationDbContext context) {
        _context = context;
    }

    [HttpPost]
    public string CreateRoom([FromBody] string roomName) {
        return roomName;
    }
}