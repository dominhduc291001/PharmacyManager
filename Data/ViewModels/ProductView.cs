using System;
using System.Collections.Generic;
using System.Text;

namespace Data.ViewModels
{
    public class ProductView
    {
        public string ProId { get; set; }
        public string ProName { get; set; }
        public string ProNo { get; set; }
        public string ProProducer { get; set; }
        public string ProPack { get; set; }
        public string ProUnit { get; set; }
        public decimal? ProPrice { get; set; }
        public int TypeId { get; set; }
        public string TypeName { get; set; }
    }
}
