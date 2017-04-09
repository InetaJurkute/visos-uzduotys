using game_shop_backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_backend.Models
{
    public class GameDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public double Price { get; set; }
        public string ImageUrl { get; set; }
        
        public virtual ICollection<int> Platforms { get; set; } = new List<int>();
        public virtual int Genre { get; set; }
    }
}