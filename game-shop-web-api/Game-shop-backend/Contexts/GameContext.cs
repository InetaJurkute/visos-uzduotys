using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using game_shop_web_api.Models;
using game_shop_web_api.Contexts;

namespace game_shop_web_api.Context
{
    public class GameContext : DbContext
    {
        public GameContext() : base("GameShopDB")
        {
            Database.SetInitializer(new GameDBInitializer());
        }

        public DbSet<Game> Games { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
