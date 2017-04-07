using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Models
{
    public class OrderState
    {
        public string[] States { get; private set; }
        [Required]
        public string CurrentState { get; private set; }

        OrderState()
        {
            States = new string[] { "Draft" , "Completed" };
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