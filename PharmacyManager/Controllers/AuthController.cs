using Application.IServices;
using Application.Services;
using Data.Dtos;
using Data.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PharmacyManager.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthServeice _authService;
        public AuthController(IAuthServeice authService)
        {
            _authService = authService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    LoginView result = await _authService.Login(request);
                    //if (result.userId != null)
                    //{
                    return Ok(result);
                    //}
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "login is failed" });
        }
    }
}
