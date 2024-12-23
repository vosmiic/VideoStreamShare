using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace VideoStreamShare.Models.Configuration;

public class RoomConfiguration : IEntityTypeConfiguration<Room> {
    public void Configure(EntityTypeBuilder<Room> builder) {
        builder.HasOne<ApplicationUser>(r => r.User).WithMany().HasForeignKey(r => r.UserId).IsRequired();
    }
}