using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_backend.Entities
{
    public class Game
    {
        public Game()
        {
            this.Platforms = new HashSet<Platform>();
        }

        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public double Price { get; set; }
        public string ImageUrl { get; set; }

        public DateTime? CreateDate { get; set; }
        public string CreateUser { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedUser { get; set; }

        public virtual ICollection<Platform> Platforms { get; set; } = new List<Platform>();
        public virtual Genre Genre { get; set; }
    }
}