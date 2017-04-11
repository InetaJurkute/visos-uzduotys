using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http.Cors;
using System.Web.Http;
using System.Web.Http.Description;
using game_shop_backend.Entities;
using game_shop_backend.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace game_shop_backend.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class GamesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [Authorize(Roles = "Admin,Customer")]
        // GET: api/Games
        public List<ViewGameDto> GetGames()
        {
            var games = db.Games.ToList();
            return AutoMapper.Mapper.Map<List<ViewGameDto>>(games);
        }
        
        [Route("api/games/mygames")]
        //[Authorize(Roles = "Customer")]
        public List<ViewGameDto> GetMyGames()
        {
            var re = Request;
            var headers = re.Headers;
            string headerId = "";
            if (headers.Contains("id"))
            {
                headerId = headers.GetValues("id").First();
            }
            var games = new List<Game>();
            games = db.Games.SqlQuery
                (@"select games.id, 
                        games.name, 
                        games.description, 
                        games.imageUrl,
                        games.CreateDate,
                        games.CreateUser,
                        games.ModifiedDate,
                        games.ModifiedUser,
                        games.Genre_Id,
                        items.price 
                    from items 
                    join orders 
                    on items.order_Id = orders.id
                    join games 
                    on games.id = game_id
                where user_id = '" + headerId + "'").ToList();

            return AutoMapper.Mapper.Map<List<ViewGameDto>>(games);
        }

        [Authorize(Roles = "Admin,Customer")]
        // GET: api/Games/5
        [ResponseType(typeof(Game))]
        public IHttpActionResult GetGame(int id)
        {
            Game game = db.Games.Find(id);
            if (game == null)
            {
                return NotFound();
            }

            return Ok(AutoMapper.Mapper.Map<GameDto>(game));
        }


        // PUT: api/Games/5
        // NOT WORKING
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutGame(int id, [FromBody]GameDto gamedto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (id != gamedto.Id)
                {
                    return BadRequest();
                }

                var game = AutoMapper.Mapper.Map<Game>(gamedto);

                //game.Platforms.Clear();
                Int32 genreID = gamedto.Genre;
                //var gameDtoGenre = db.Genres.Find(genreID);
                Genre gameDtoGenre = db.Genres.Find(genreID);
                /*
                var randomGame = db.Games.FirstOrDefault(p => p.Id == 5);
                var gameDtoGenre = db.Genres.FirstOrDefault(p => p.Id == genreID);
                */
                game.Genre = gameDtoGenre;
                foreach (var p in gamedto.Platforms)
                {
                    var plat = db.Platforms.Find(p);
                    game.Platforms.Add(plat);
                }

                db.Games.Attach(game);
                var entry = db.Entry(game);

                /*
                db.Games.Attach(game);
                var entry = db.Entry(game);
                entry.State = EntityState.Modified;
                */

                //db.Entry(game).State = EntityState.Modified;
            }
            catch (Exception ex)
            {
                var str = ex.Message;
            }


            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Games
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(GameDto))]
        public IHttpActionResult PostGame(GameDto gamedto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var game = AutoMapper.Mapper.Map<Game>(gamedto);
            Int32 genreID = gamedto.Genre;
            Genre gameDtoGenre = db.Genres.Find(genreID);
            game.Genre = gameDtoGenre;
            foreach (var p in gamedto.Platforms)
            {
                var plat = db.Platforms.Find(p);
                game.Platforms.Add(plat);
            }

            db.Games.Add(game);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/Games/5
        [ResponseType(typeof(Game))]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult DeleteGame(int id)
        {
            Game game = db.Games.Find(id);
            if (game == null)
            {
                return NotFound();
            }

            db.Games.Remove(game);
            db.SaveChanges();

            return Ok(game);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameExists(int id)
        {
            return db.Games.Count(e => e.Id == id) > 0;
        }
    }
}