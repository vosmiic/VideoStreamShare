namespace VideoStreamShare.Models;

public class Room : GuidPrimaryKey {
    public virtual ApplicationUser User { get; set; }
    public string UserId { get; set; }
    public string Name { get; set; }
}