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
    public class PlatformsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Platforms
        public List<PlatformDto> GetPlatforms()
        {
            var plats = db.Platforms.ToList();
            return AutoMapper.Mapper.Map<List<PlatformDto>>(plats);
        }

        // GET: api/Platforms/5
        [ResponseType(typeof(Platform))]
        public IHttpActionResult GetPlatform(int id)
        {
            Platform plat = db.Platforms.Find(id);
            if (plat == null)
            {
                return NotFound();
            }

            return Ok(AutoMapper.Mapper.Map<PlatformDto>(plat));
        }
    }
}