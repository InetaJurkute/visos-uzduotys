using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class Platform
    {
        // Could use an array
        public string[] Platforms { get; private set; }
        [Required]
        public string CurrentPlatform { get; private set; }

        Platform()
        {
            Platforms = new string[] { "Pc", "Xbox360", "XboxOne", "Ps3", "Ps4", "Nintendo" };
        }

        public void SetCurrentGenre(string platform)
        {
            int k = Array.IndexOf(Platforms, platform);
            if (k != -1)
            {
                CurrentPlatform = Platforms[k];
            }
            else
                CurrentPlatform = null;
        }
    }
}