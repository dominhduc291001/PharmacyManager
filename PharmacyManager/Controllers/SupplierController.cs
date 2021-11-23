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
    public class SupplierController : Controller
    {
        private readonly ISupplierService _supplierService;
        public SupplierController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpGet("AllSupplier")]
        public async Task<IActionResult> GetAllSupplier()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<SupplierView> result = await _supplierService.getAllSupplier();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all supplier failed" });
        }

        [HttpPost("CreateOrUpdateSupplier")]
        public async Task<IActionResult> CreateOrUpdateSupplier(SupplierDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _supplierService.updateOrCreateSupplier(request);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Create or update supplier failed" });
        }

        [HttpDelete("DeleteSupplier")]
        public async Task<IActionResult> DeleteSupplier(string supId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _supplierService.deleteSupplier(supId);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Delete supplier failed" });
        }
    }
}
