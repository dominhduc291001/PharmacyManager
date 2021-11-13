using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class StoreProduct
    {
        public int SpId { get; set; }
        public string ProId { get; set; }
        public int? Quantity { get; set; }

        public virtual Product Pro { get; set; }
    }
}
