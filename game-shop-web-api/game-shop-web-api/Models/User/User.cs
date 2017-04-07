using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Level { get; set; }
    }
}