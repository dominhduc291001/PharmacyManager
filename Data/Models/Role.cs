using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class Role
    {
        public Role()
        {
            RoleUser = new HashSet<RoleUser>();
        }

        public string RoleId { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<RoleUser> RoleUser { get; set; }
    }
}
