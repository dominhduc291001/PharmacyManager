using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class LinkProductType
    {
        public int PtId { get; set; }
        public string ProId { get; set; }
        public int TypeId { get; set; }

        public virtual Product Pro { get; set; }
        public virtual ProductType Type { get; set; }
    }
}
