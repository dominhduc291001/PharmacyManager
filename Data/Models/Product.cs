using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class Product
    {
        public Product()
        {
            ExpOrderDetail = new HashSet<ExpOrderDetail>();
            ImpOrderDetail = new HashSet<ImpOrderDetail>();
            LinkProductType = new HashSet<LinkProductType>();
            StoreProduct = new HashSet<StoreProduct>();
        }

        public string ProId { get; set; }
        public string ProName { get; set; }
        public string ProNo { get; set; }
        public string ProProducer { get; set; }
        public string ProPack { get; set; }
        public string ProUnit { get; set; }
        public decimal? ProPrice { get; set; }

        public virtual ICollection<ExpOrderDetail> ExpOrderDetail { get; set; }
        public virtual ICollection<ImpOrderDetail> ImpOrderDetail { get; set; }
        public virtual ICollection<LinkProductType> LinkProductType { get; set; }
        public virtual ICollection<StoreProduct> StoreProduct { get; set; }
    }
}
