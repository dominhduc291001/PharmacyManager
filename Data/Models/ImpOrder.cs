using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class ImpOrder
    {
        public ImpOrder()
        {
            ImpOrderDetail = new HashSet<ImpOrderDetail>();
        }

        public string ImpId { get; set; }
        public DateTime? ImpDate { get; set; }
        public string ImpNote { get; set; }
        public string UserId { get; set; }
        public string SupId { get; set; }
        public decimal? ImpTotal { get; set; }

        public virtual Supplier Sup { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<ImpOrderDetail> ImpOrderDetail { get; set; }
    }
}
