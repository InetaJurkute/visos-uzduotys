using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models.User
{
    public class Order
    {
        public DateTime CreationDate { get; set; }
        public double Sum { get; set; }
        // Is the order completed
        public OrderState State { get; set; }
    }
}