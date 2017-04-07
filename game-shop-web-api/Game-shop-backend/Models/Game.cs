using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        public List<Genre> Genres { get; set; }
        public List<Platform> Platforms { get; set; }
    }
}