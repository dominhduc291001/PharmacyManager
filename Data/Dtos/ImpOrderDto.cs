using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Dtos
{
    public class ImpOrderDto
    {
        public string ImpId { get; set; }
        public DateTime? ImpDate { get; set; }
        public string ImpNote { get; set; }
        public string UserId { get; set; }
        public string SupId { get; set; }
        public string ProId { get; set; }
        public int? Quantity { get; set; }
    }
}
