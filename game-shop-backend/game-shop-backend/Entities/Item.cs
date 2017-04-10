using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_backend.Entities
{
    public class Item
    {
        public int Id { get; set; }
        [Required]
        public double Price { get; set; }

        public DateTime? CreateDate { get; set; }
        public string CreateUser { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedUser { get; set; }

        public virtual Game Game { get; set; }
    }
}