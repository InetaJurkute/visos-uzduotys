using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_backend.Models
{
    public class ViewGameDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public double Price { get; set; }
        public string ImageUrl { get; set; }

        public virtual ICollection<string> Platforms { get; set; } = new List<string>();
        public virtual string Genre { get; set; }
    }
}