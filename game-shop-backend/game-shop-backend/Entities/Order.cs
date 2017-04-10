using game_shop_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_backend.Entities
{
    public class Order
    {
        public Order()
        {
            this.Items = new HashSet<Item>();
        }
        public int Id { get; set; }
        public double Sum { get; set; }

        public DateTime? CreateDate { get; set; }
        public string CreateUser { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedUser { get; set; }

        public virtual ICollection<Item> Items { get; set; } = new List<Item>();
        public virtual ApplicationUser User { get; set; }
    }
}