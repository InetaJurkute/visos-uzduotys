using game_shop_backend.Entities;
using game_shop_backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace game_shop_backend.Controllers
{
    [EnableCors("http://localhost:4200", "*", "*")]
    public class GenresController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Genres
        public List<GenreDto> GetGenres()
        {
            var genres = db.Genres.ToList();
            return AutoMapper.Mapper.Map<List<GenreDto>>(genres);
        }

        // GET: api/Genres/5
        [ResponseType(typeof(Genre))]
        public IHttpActionResult GetGenre(int id)
        {
            Genre genre = db.Genres.Find(id);
            if (genre == null)
            {
                return NotFound();
            }

            return Ok(AutoMapper.Mapper.Map<GenreDto>(genre));
        }
    }
}