using Application.IServices;
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
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("AllProduct")]
        public async Task<IActionResult> GetAllProduct()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<ProductView> result = await _productService.getAllProduct();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all product faile" });
        }

        [HttpGet("AllProductType")]
        public async Task<IActionResult> GetAllProductType()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<ProductTypeView> result = await _productService.getAllProductType();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all product type faile" });
        }
    }
}
