using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models.User
{
    public class OrderState
    {
        public string[] States { get; private set; }
        [Required]
        public string CurrentState { get; private set; }

        OrderState()
        {
            States = new string[] { "Pc", "Xbox360", "XboxOne", "Ps3", "Ps4", "Nintendo" };
        }

        public void SetCurrentGenre(string state)
        {
            int k = Array.IndexOf(States, state);
            if (k != -1)
            {
                CurrentState = States[k];
            }
            else
                CurrentState = null;
        }
    }
}