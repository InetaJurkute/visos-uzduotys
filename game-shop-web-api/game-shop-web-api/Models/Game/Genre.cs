using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models.Genre
{
    public class Genre
    {
        // Could use an array
        public string[] Genres { get; private set; }
        [Required]
        public string CurrentdGenre { get; private set; }

        Genre()
        {
            Genres = new string[] { "Action", "Fantasy", "Racing", "Simulator", "RPG", "Strategy", "Shooter" };
        }

        public void SetCurrentGenre(string genre)
        {
            int k = Array.IndexOf(Genres, genre);
            if (k != -1)
            {
                CurrentdGenre = Genres[k];
            }
            else
                CurrentdGenre = null;
        }
    }
}