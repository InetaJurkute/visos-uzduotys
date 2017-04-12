using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using AutoMapper;
using Newtonsoft.Json.Serialization;
using game_shop_backend.Models;
using game_shop_backend.Entities;
//using System.Linq;

namespace game_shop_backend
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var config = GlobalConfiguration.Configuration;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            Mapper.Initialize(cfg => {
                //ApplicationDbContext db = new ApplicationDbContext();

                cfg.CreateMap<Platform, int>().ConstructUsing(source => source.Id);
                cfg.CreateMap<Genre, int>().ConstructUsing(source => source.Id);
                
                cfg.CreateMap<Platform, string>().ConstructUsing(source => source.Name);
                cfg.CreateMap<Genre, string>().ConstructUsing(source => source.Name);

                cfg.CreateMap<Platform, PlatformDto>();
                cfg.CreateMap<Genre, GenreDto>();

                cfg.CreateMap<Game, GameDto>();
                cfg.CreateMap<Game, ViewGameDto>();

                cfg.CreateMap<GenreDto, Genre>();
                cfg.CreateMap<PlatformDto, Platform>();

                cfg.CreateMap<Order, ViewOrderDto>();
                
                cfg.CreateMap<GameDto, Game>()
                    .ForMember( x => x.Genre, m => m.Ignore() )
                    .ForMember(x => x.Platforms, m => m.Ignore());

                /*
                .BeforeMap((src, dest) => {
                    foreach (Platform i in dest.Platforms)
                    {
                        if (!src.Platforms.Contains(i))
                        {
                            //remove
                            Platform plat = dest.Platforms.FirstOrDefault((p) => p.Id == i.Id);
                            dest.Platforms.Remove(plat);
                        }
                    }
                    foreach (Platform i in src.Platforms)
                    {
                        //i -> DTO ir jei dest -> DB neturi
                        if(dest.Platforms.Count(prop => prop.Id == i.Id) == 0)
                        {
                            //add
                            Platform plat = db.Platforms.Find(i.Id);
                            dest.Platforms.Add(plat);
                            //context
                        }
                    }*/
            });
        }
    }
}
