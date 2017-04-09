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
using game_shop_backend.Entities;
using game_shop_backend.Models;

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
                cfg.CreateMap<Platform, int>().ConstructUsing(source => source.Id);
                cfg.CreateMap<Genre, int>().ConstructUsing(source => source.Id);
                cfg.CreateMap<Game, GameDto>();

                cfg.CreateMap<GenreDto, Genre>();
                cfg.CreateMap<PlatformDto, Platform>();
            /*
            cfg.CreateMap<GameDto, Game>();*/

                cfg.CreateMap<GameDto, Game>()
                    .ForMember( x => x.Genre, m => m.Ignore() )
                    .ForMember( x => x.Platforms, m => m.Ignore() );

            });
        }
    }
}
