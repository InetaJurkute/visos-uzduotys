using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public double Total { get; private set; }
        // Is the order completed
        public OrderState State { get; set; }
        public List<Item> Items { get; set; }
        public void UpdateTotal()
        {
            Total = 0;
            foreach(Item item in Items)
            {
                Total += item.Price;
            }
        }
    }

}