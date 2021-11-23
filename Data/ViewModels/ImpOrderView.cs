using System;
using System.Collections.Generic;
using System.Text;

namespace Data.ViewModels
{
    public class ImpOrderView
    {
        public string ImpId { get; set; }
        public DateTime? ImpDate { get; set; }
        public string ImpNote { get; set; }
        public string UserId { get; set; }
        public string SupId { get; set; }
        public string SupName { get; set; }
        public decimal? ImpTotal { get; set; }
        public string ProId { get; set; }
        public string ProName { get; set; }
        public int? Quantity { get; set; }
    }
}
