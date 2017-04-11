namespace game_shop_backend.Migrations
{
    using game_shop_backend.Entities;
    using game_shop_backend.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Web.Security;

    internal sealed class Configuration : DbMigrationsConfiguration<game_shop_backend.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "game_shop_backend.Models.ApplicationDbContext";
        }

        protected override void Seed(ApplicationDbContext context)
        {
            try
            {
                if (!context.Platforms.Any() && !context.Genres.Any() &&
                    !context.Games.Any() && !context.Items.Any() && !context.Orders.Any())
                {

                    var plat1 = new Platform { Name = "PC" };
                    var plat2 = new Platform { Name = "Xbox" };
                    var plat3 = new Platform { Name = "PlayStation" };
                    var plat4 = new Platform { Name = "Nintendo" };

                    var genre1 = new Genre { Name = "Action" };
                    var genre2 = new Genre { Name = "Shooter" };
                    var genre3 = new Genre { Name = "Horror" };
                    var genre4 = new Genre { Name = "Strategy" };
                    var genre5 = new Genre { Name = "RPG" };

                    var game1 = new Game
                    {
                        Name = "NewHope",
                        Description = "db new hope 1 miiiine",
                        Price = 19.99,
                        ImageUrl = "../../../assets/1.jpg"
                    };
                    var game2 = new Game
                    {
                        Name = "NewHope2",
                        Description = "db new hope 2",
                        Price = 23.99,
                        ImageUrl = "../../../assets/2.jpg"
                    };
                    var game3 = new Game
                    {
                        Name = "battlefield",
                        Description = "shooty shoot",
                        Price = 12.99,
                        ImageUrl = "../../../assets/3.jpg"
                    };
                    var game4 = new Game
                    {
                        Name = "galaxy wars",
                        Description = "control the galaxy!",
                        Price = 39.99,
                        ImageUrl = "../../../assets/4.jpg"
                    };
                    var game5 = new Game
                    {
                        Name = "Destiny",
                        Description = "what's yours?",
                        Price = 19.99,
                        ImageUrl = "../../../assets/5.jpg"
                    };
                    var game6 = new Game
                    {
                        Name = "Besiege",
                        Description = "Besiege is a physics based building game in which you construct medieval siege engines and lay waste to immense fortresses and peaceful hamlets. Build a machine which can crush windmills, wipe out battalions of brave soldiers and transport valuable resources, defending your creation against cannons, archers and whatever else the desperate enemies have at their disposal. Create a trundling behemoth, or take clumsily to the skies, and cause carnage in fully destructible environments. Ultimately, you must conquer every Kingdom by crippling their castles and killing their men and livestock, in as creative or clinical a manner as possible! ",
                        Price = 5.59,
                        ImageUrl = "../../../assets/6.jpg"
                    };

                    context.Platforms.Add(plat1);
                    context.Platforms.Add(plat2);
                    context.Platforms.Add(plat3);
                    context.Platforms.Add(plat4);

                    context.Genres.Add(genre1);
                    context.Genres.Add(genre2);
                    context.Genres.Add(genre3);
                    context.Genres.Add(genre4);
                    context.Genres.Add(genre5);

                    game1.Genre = genre1;
                    game1.Platforms.Add(plat1);
                    game1.Platforms.Add(plat3);

                    game2.Genre = genre2;
                    game2.Platforms.Add(plat4);
                    game2.Platforms.Add(plat2);

                    game3.Genre = genre2;
                    game3.Platforms.Add(plat1);
                    game3.Platforms.Add(plat3);

                    game4.Genre = genre4;
                    game4.Platforms.Add(plat4);

                    game5.Genre = genre5;
                    game5.Platforms.Add(plat1);
                    game5.Platforms.Add(plat3);

                    game6.Genre = genre5;
                    game6.Platforms.Add(plat1);
                    game6.Platforms.Add(plat2);

                    context.Games.Add(game1);
                    context.Games.Add(game2);
                    context.Games.Add(game3);
                    context.Games.Add(game4);
                    context.Games.Add(game5);
                    context.Games.Add(game6);
                    var admin = new ApplicationUser();
                    var test = new ApplicationUser();
                    var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
                    var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

                    UserManager.PasswordValidator = new PasswordValidator
                    {
                        RequiredLength = 4,
                        RequireNonLetterOrDigit = false,
                        RequireDigit = false,
                        RequireLowercase = false,
                        RequireUppercase = false,
                    };

                    if (!roleManager.RoleExists("Customer"))
                    {
                        var role = new IdentityRole();
                        role.Name = "Customer";
                        roleManager.Create(role);

                        var user1 = new ApplicationUser();
                        user1.UserName = "test";
                        user1.Email = "test@test.com";
                        user1.EmailConfirmed = true;
                        string user1PWD = "test";
                        test = user1;

                        var user2 = new ApplicationUser();
                        user2.UserName = "demo";
                        user2.Email = "demo@demo.com";
                        user2.EmailConfirmed = true;
                        string user2PWD = "demo";

                        var chkUser1 = UserManager.Create(user1, user1PWD);
                        var chkUser2 = UserManager.Create(user2, user2PWD);

                        if (chkUser1.Succeeded && chkUser2.Succeeded)
                        {
                            var result1 = UserManager.AddToRole(user1.Id, "Customer");
                            var result2 = UserManager.AddToRole(user2.Id, "Customer");
                        }
                    }

                    if (!roleManager.RoleExists("Admin"))
                    {
                        var role = new IdentityRole();
                        role.Name = "Admin";
                        roleManager.Create(role);

                        var user = new ApplicationUser();
                        user.UserName = "admin";
                        user.Email = "admin@admin.com";
                        user.EmailConfirmed = true;
                        string userPWD = "admin";
                        admin = user;

                        var chkUser = UserManager.Create(user, userPWD);

                        if (chkUser.Succeeded)
                        {
                            var result1 = UserManager.AddToRole(user.Id, "Admin");
                        }
                    }

                    var item1 = new Item { Price = game1.Price };
                    item1.Game = game1;

                    var item2 = new Item { Price = game2.Price };
                    item2.Game = game2;

                    var item3 = new Item { Price = game3.Price };
                    item3.Game = game3;

                    var item4 = new Item { Price = game3.Price };
                    item4.Game = game3;

                    context.Items.Add(item1);
                    context.Items.Add(item2);
                    context.Items.Add(item3);

                    var order1 = new Order { };
                    var order2 = new Order { };

                    order1.User = test;
                    order1.Items.Add(item2);
                    foreach (Item item in order1.Items)
                    {
                        order1.Sum += item.Price;
                    }

                    order2.User = test;
                    order2.Items.Add(item1);
                    order2.Items.Add(item3);
                    order2.Items.Add(item4);
                    foreach (Item item in order2.Items)
                    {
                        order2.Sum += item.Price;
                    }

                    context.Orders.Add(order1);
                    context.Orders.Add(order2);
                }
                
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                var str = ex.Message;
            }
        }
    }
}


