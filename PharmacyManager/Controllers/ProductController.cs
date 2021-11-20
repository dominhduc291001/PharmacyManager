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

        [HttpPost("CreateProduct")]
        public async Task<IActionResult> CreateProduct(ProductDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _productService.createProduct(request);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Create product failed" });
        }

        [HttpDelete("DeleteProduct")]
        public async Task<IActionResult> DeleteProduct(string ProId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _productService.deleteProduct(ProId);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Delete product failed" });
        }
    }
}
