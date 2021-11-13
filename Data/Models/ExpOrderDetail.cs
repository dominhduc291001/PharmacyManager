using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class ExpOrderDetail
    {
        public int EodId { get; set; }
        public string ProId { get; set; }
        public string ExpId { get; set; }
        public string ProNote { get; set; }
        public int? Quantity { get; set; }
        public decimal? ExpPrice { get; set; }

        public virtual ExpOrder Exp { get; set; }
        public virtual Product Pro { get; set; }
    }
}
