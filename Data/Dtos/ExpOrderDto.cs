using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Dtos
{
    public class ExpOrderDto
    {
        public string ExpId { get; set; }
        public DateTime? ExpDate { get; set; }
        public string ExpNote { get; set; }
        public string CusId { get; set; }
        public string UserId { get; set; }
        public string ProId { get; set; }
        public int? Quantity { get; set; }
        public decimal? ExpPrice { get; set; }
    }
}
