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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("InfoUser")]
        public async Task<IActionResult> GetInfoUser(string userId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    InfoUserView result = await _userService.getInfoUser(userId);
                    if (result.UserId != "")
                    {
                        return Ok(result);
                    }
                    else
                    {
                        return BadRequest(new { message = "Get info user failed !" });
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get info user faile" });
        }


        [HttpGet("AllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<InfoUserView> result = await _userService.getAllUser();
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get all user faile" });
        }
    }
}
