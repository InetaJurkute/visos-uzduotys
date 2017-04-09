using game_shop_backend.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace game_shop_backend.Models
{
    public class SeedOnRun : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            try
            {/*
                var plat1 = new Platform { Name = "PC" };
                var plat2 = new Platform { Name = "Xbox" };
                var plat3 = new Platform { Name = "PlayStation" };
                var plat4 = new Platform { Name = "Nintendo" };

                context.Platforms.Add(plat1);
                context.Platforms.Add(plat2);
                context.Platforms.Add(plat3);
                context.Platforms.Add(plat4);
                */
                /*
                context.Platforms.AddRange(new List<Platform>()
                {
                    new Platform { Name = "PC"},
                    new Platform { Name = "Xbox"},
                    new Platform { Name = "PlayStation"},
                    new Platform { Name = "Nintendo"}
                });
                */
                
                /*
                var game1 = new Game
                {
                    Name = "NewHope",
                    Description = "db new hope 1 miiiine",
                    Price = 19.99,
                    ImageUrl = "../../../assets/1.jpg"
                };
                game1.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 1));
                game1.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 2));
                context.Games.Add(game1);

                var game2 = new Game
                {
                    Name = "NewHope2",
                    Description = "db new hope 2",
                    Price = 23.99,
                    ImageUrl = "../../../assets/2.jpg"
                };
                game2.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 2));
                game2.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 3));
                context.Games.Add(game2);

                var game3 = new Game
                {
                    Name = "battlefield",
                    Description = "shooty shoot",
                    Price = 12.99,
                    ImageUrl = "../../../assets/3.jpg"
                };
                game3.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 4));
                context.Games.Add(game3);

                var game4 = new Game
                {
                    Name = "galaxy wars",
                    Description = "control the galaxy!",
                    Price = 39.99,
                    ImageUrl = "../../../assets/4.jpg"
                };
                game4.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 1));
                context.Games.Add(game4);

                var game5 = new Game
                {
                    Name = "Destiny",
                    Description = "what's yours?",
                    Price = 19.99,
                    ImageUrl = "../../../assets/5.jpg"
                };
                game5.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 1));
                game5.Platforms.Add(context.Platforms.FirstOrDefault(p => p.Id == 3));
                context.Games.Add(game5);
                */



                /*
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

                    var chkUser = UserManager.Create(user, userPWD);

                    if (chkUser.Succeeded)
                    {
                        var result1 = UserManager.AddToRole(user.Id, "Admin");

                    }
                }

                if (!roleManager.RoleExists("Customer"))
                {
                    var role = new IdentityRole();
                    role.Name = "Customer";
                    roleManager.Create(role);

                    var user = new ApplicationUser();
                    user.UserName = "test";
                    user.Email = "test@test.com";
                    user.EmailConfirmed = true;
                    string userPWD = "test";

                    var chkUser = UserManager.Create(user, userPWD);

                    if (chkUser.Succeeded)
                    {
                        var result1 = UserManager.AddToRole(user.Id, "Customer");

                    }
                }

                context.SaveChanges();
            }
            */
            catch (Exception ex)
            {
                var str = ex.Message;
            }
            
        }
    }
}