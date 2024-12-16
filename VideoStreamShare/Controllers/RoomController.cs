using Microsoft.AspNetCore.Mvc;

namespace VideoStreamShare.Controllers;

[ApiController]
[Route("[controller]")]
public class RoomController : Controller {

    [HttpPost]
    public string CreateRoom([FromBody] string roomName) {
        return roomName;
    }
}