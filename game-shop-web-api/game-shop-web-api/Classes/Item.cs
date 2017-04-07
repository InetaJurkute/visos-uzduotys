using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class Item
    {
        public double Price { get; set; }
        public Game Game { get; set; }
    }
}