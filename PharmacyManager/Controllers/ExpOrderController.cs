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
    public class ExpOrderController : Controller
    {
        private readonly IExpOrderService _expOrderService;
        public ExpOrderController(IExpOrderService expOrderService)
        {
            _expOrderService = expOrderService;
        }

        [HttpGet("AllExpOrder")]
        public async Task<IActionResult> AllExpOrder()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<ExpOrderView> result = await _expOrderService.getAllExpOrder();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all exp order failed" });
        }

        [HttpPost("ExpOrderProduct")]
        public async Task<IActionResult> ExpOrderProduct(ExpOrderDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _expOrderService.createExpOrder(request);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "export order failed" });
        }
    }
}
