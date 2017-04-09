using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_backend.Entities
{
    public class Platform
    {
        public Platform()
        {
            this.Games = new HashSet<Game>();
        }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual ICollection<Game> Games { get; set; } = new List<Game>();
    }
}