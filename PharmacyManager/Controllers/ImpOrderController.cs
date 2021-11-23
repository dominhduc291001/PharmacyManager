using Application.IServices;
using Data.Dtos;
using Data.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyManager.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ImpOrderController : Controller
    {
        private readonly IImpOrderService _impOrderService;
        public ImpOrderController(IImpOrderService impOrderService)
        {
            _impOrderService = impOrderService;
        }
        [HttpGet("AllImpOrder")]
        public async Task<IActionResult> AllImpOrder()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<ImpOrderView> result = await _impOrderService.getAllImpOrder();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all ImpOrder failed" });
        }

        [HttpPost("ImpOrderProduct")]
        public async Task<IActionResult> ImpOrderProduct(ImpOrderDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _impOrderService.CreateImpOrder(request);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "import order failed" });
        }

    }
}
