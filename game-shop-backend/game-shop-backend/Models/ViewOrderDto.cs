using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_backend.Models
{
    public class ViewOrderDto
    {
        public int Id { get; set; }
        public double Sum { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}