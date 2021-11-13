using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class Users
    {
        public Users()
        {
            ExpOrder = new HashSet<ExpOrder>();
            ImpOrder = new HashSet<ImpOrder>();
            RoleUser = new HashSet<RoleUser>();
        }

        public string UserId { get; set; }
        public string UserPass { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public virtual ICollection<ExpOrder> ExpOrder { get; set; }
        public virtual ICollection<ImpOrder> ImpOrder { get; set; }
        public virtual ICollection<RoleUser> RoleUser { get; set; }
    }
}
