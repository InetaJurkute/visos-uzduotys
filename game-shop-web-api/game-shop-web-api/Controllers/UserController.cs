using game_shop_web_api.Context;
using game_shop_web_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace game_shop_web_api.Controllers
{
    public class UserController : ApiController
    {
        // GET api/game/
        public List<User> Get()
        {
            using (var ctx = new GameContext())
            {
                try
                {
                    return ctx.Users.ToList();
                }
                catch (Exception ex)
                {
                    var str = ex.Message;
                    return null;
                }
            }
        }

        // GET api/game/5
        public User Get(int id)
        {
            using (var ctx = new GameContext())
            {
                return ctx.Users.Find(id);
            }
        }
    }
}
