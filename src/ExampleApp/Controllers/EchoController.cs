using kr.bbon.AspNetCore;
using kr.bbon.AspNetCore.Filters;
using kr.bbon.AspNetCore.Models;
using kr.bbon.AspNetCore.Mvc;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExampleApp.Controllers
{
    [ApiController]
    [Area(DefaultValues.AreaName)]
    [Route(DefaultValues.RouteTemplate)]
    [ApiVersion("1.0")]
    [ApiExceptionHandlerFilter]

    public class EchoController : ApiControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(ApiResponseModel<ResponseModel>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponseModel) ,StatusCodes.Status500InternalServerError)]
        public IActionResult Index([FromQuery] RequestModel model)
        {
            var responseModel = model;

            return StatusCode(StatusCodes.Status200OK, responseModel);
        }
    }

    public enum ItemTypes
    {
        A,
        B,
        C
    }

    public class RequestModel
    {
        public Guid? Id { get; set; }

        public IEnumerable<ItemTypes> ItemTypes { get; set; }

        public int? Page { get; set; }

        public int? Limit { get; set; }
    }

    public class ResponseModel: RequestModel
    {

    }
}
