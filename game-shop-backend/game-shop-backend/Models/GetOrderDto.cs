using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_backend.Models
{
    public class GetOrderDto
    {
        public virtual string UserId { get; set; }
        public virtual Dictionary<string, int> OrderItems { get; set; }
    }
}