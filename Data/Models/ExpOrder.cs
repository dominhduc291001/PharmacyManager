using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class ExpOrder
    {
        public ExpOrder()
        {
            ExpOrderDetail = new HashSet<ExpOrderDetail>();
        }

        public string ExpId { get; set; }
        public DateTime? ExpDate { get; set; }
        public int? ExpStatus { get; set; }
        public string ExpNote { get; set; }
        public decimal? ExpTotal { get; set; }
        public string CusId { get; set; }
        public string UserId { get; set; }

        public virtual Customer Cus { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<ExpOrderDetail> ExpOrderDetail { get; set; }
    }
}
