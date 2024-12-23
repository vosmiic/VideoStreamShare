using System.ComponentModel.DataAnnotations;

namespace VideoStreamShare.Models;

public class GuidPrimaryKey {
    [Key]
    public Guid Id { get; set; }
}