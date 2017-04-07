using game_shop_web_api.Context;
using game_shop_web_api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace game_shop_web_api.Contexts
{
    public class GameDBInitializer : DropCreateDatabaseIfModelChanges<GameContext>
    {
        protected override void Seed(GameContext context)
        {
            context.Games.Add(
                  new Game
                  {
                      Id = 1,
                      Name = "NewHope",
                      Description = "db new hope 1 miiiine",
                      Price = 19.99,
                      ImageUrl = "../../../assets/1.jpg"
                  });
            context.Games.Add(
                 new Game
                 {
                     Id = 2,
                     Name = "NewHope2",
                     Description = "db new hope 2",
                     Price = 23.99,
                     ImageUrl = "../../../assets/2.jpg"
                 });
            context.Games.Add(
                 new Game
                 {
                     Id = 3,
                     Name = "battlefield",
                     Description = "shooty shoot",
                     Price = 12.99,
                     ImageUrl = "../../../assets/3.jpg"
                 });
            context.Games.Add(
                 new Game
                 {
                     Id = 4,
                     Name = "galaxy wars",
                     Description = "control the galaxy!",
                     Price = 39.99,
                     ImageUrl = "../../../assets/4.jpg"
                 });
            context.Games.Add(
                 new Game
                 {
                     Id = 5,
                     Name = "Destiny",
                     Description = "what's yours?",
                     Price = 19.99,
                     ImageUrl = "../../../assets/5.jpg"
                 });
            context.Users.Add(
                 new User
                 {
                     Id = 1,
                     Username = "test",
                     Password = "test",
                     Email = "test@email.com",
                     Level = 1
                 });
            context.Users.Add(
                 new User
                 {
                     Id = 2,
                     Username = "admin",
                     Password = "admin",
                     Email = "admin@email.com",
                     Level = 10
                 });

            context.SaveChanges();

            base.Seed(context);

        }
    }
}