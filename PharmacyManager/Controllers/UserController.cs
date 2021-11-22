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
            return BadRequest(new { message = "Get info user failed" });
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
            return BadRequest(new { message = "Get all user failed" });
        }

        [HttpGet("GetRoleUser")]
        public async Task<IActionResult> GetRoleUser(string userId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    List<RoleUserView> result = await _userService.getRoleUser(userId);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "Get role user failed" });
        }

        [HttpPost("CreateOrUpdateUser")]
        public async Task<IActionResult> CreateOrUpdateUser(UserDto user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _userService.updateUser(user);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "create or update user failed" });
        }

        [HttpPost("AddRoleUser")]
        public async Task<IActionResult> AddRoleUser(RoleUserDto request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _userService.addRoleUser(request);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "add role user failed" });
        }

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> UpdateUser(string userId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    StatusView result = await _userService.deleteUser(userId);
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest(new { message = "delete user failed" });
        }
    }
}
