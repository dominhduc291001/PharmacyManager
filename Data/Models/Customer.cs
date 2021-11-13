using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class Customer
    {
        public Customer()
        {
            ExpOrder = new HashSet<ExpOrder>();
        }

        public string CusId { get; set; }
        public string CusName { get; set; }
        public string CusEmail { get; set; }
        public string CusPhone { get; set; }
        public string CusAddress { get; set; }
        public string CusLicense { get; set; }

        public virtual ICollection<ExpOrder> ExpOrder { get; set; }
    }
}
