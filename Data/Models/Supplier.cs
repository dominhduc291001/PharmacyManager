using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class Supplier
    {
        public Supplier()
        {
            ImpOrder = new HashSet<ImpOrder>();
        }

        public string SupId { get; set; }
        public string SupName { get; set; }
        public string SupEmail { get; set; }
        public string SupPhone { get; set; }
        public string SupAddress { get; set; }
        public string SupNo { get; set; }
        public string SupLicense { get; set; }

        public virtual ICollection<ImpOrder> ImpOrder { get; set; }
    }
}
