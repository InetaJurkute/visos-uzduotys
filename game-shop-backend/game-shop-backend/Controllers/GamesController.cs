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

namespace game_shop_backend.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class GamesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Games
        public List<GameDto> GetGames()
        {
            var games = db.Games.ToList();
            return AutoMapper.Mapper.Map<List<GameDto>>(games);
        }

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

            return CreatedAtRoute("DefaultApi", new { id = game.Id }, game);
        }

        // DELETE: api/Games/5
        [ResponseType(typeof(Game))]
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