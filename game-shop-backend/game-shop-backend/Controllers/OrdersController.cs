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
    public class OrdersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Orders
        [Authorize(Roles = "Admin")]
        public List<ViewOrderDto> GetOrders()
        {
            var orders = db.Orders.ToList();
            return AutoMapper.Mapper.Map<List<ViewOrderDto>>(orders);
        }


        // POST: api/Orders
        [Authorize(Roles = "Customer")]
        [ResponseType(typeof(GetOrderDto))]
        public IHttpActionResult PostOrder(GetOrderDto getOrderDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
            var order = new Order();

            foreach (var ordItem in getOrderDto.OrderItems)
            {
                var gameId = Int32.Parse(ordItem.Key);
                for (int i = 0; i < ordItem.Value; i++)
                {
                    var item = new Item { Price = db.Games.Find(gameId).Price };
                    item.Game = db.Games.Find(gameId);
                    db.Items.Add(item);
                    order.Items.Add(item);
                }
            }

            foreach (Item item in order.Items)
            {
                order.Sum += item.Price;
            }

            order.User = userManager.FindById(getOrderDto.UserId);
            db.Orders.Add(order);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

    }
}