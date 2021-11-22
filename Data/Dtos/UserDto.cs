using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Dtos
{
    public class UserDto
    {
        public string UserId { get; set; }
        public string UserPass { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
