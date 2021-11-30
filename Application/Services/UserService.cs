using Application.IServices;
using Data.Dtos;
using Data.Models;
using Data.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly DrugRepositoryDBContext _context;
        public UserService(DrugRepositoryDBContext context)
        {
            _context = context;
        }

        public async Task<StatusView> addRoleUser(RoleUserDto request)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "add failed !"
            };
            if (request == null)
            {
                return result;
            }
            var temp = await _context.Database.ExecuteSqlRawAsync($"sp_Add_RoleUser {request.UserId}, {request.RoleId}");
            if (temp == 1)
            {
                result.status = "true";
                result.message = "add success";
                return result;
            }
            return result;
        }

        public async Task<StatusView> deleteUser(string userId)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "delete user failed !"
            };
            if (userId == null)
            {
                return result;
            }
            var temp = await _context.Database.ExecuteSqlRawAsync($"sp_Delete_User {userId}");
            if(temp == 1)
            {
                result.status = "true";
                result.message = "delete success";
                return result;
            }
            return result;
        }

        public async Task<List<InfoUserView>> getAllUser()
        {
            List<InfoUserView> result = new List<InfoUserView>();
            try
            {
                result = await _context.Set<InfoUserView>().FromSqlRaw("sp_GetAll_Users").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<InfoUserView> getInfoUser(string request)
        {
            InfoUserView result = new InfoUserView()
            {
                UserId = "",
                Email = "",
                FullName = "",
                PhoneNumber = ""
            };
            if (request == null)
            {
                return result;
            }
            try
            {
                var res = await _context.Users.FromSqlRaw($"USP_INFO_USER {request}").ToListAsync();
                var userT = res.FirstOrDefault();
                if (userT != null)
                {
                    result.UserId = userT.UserId;
                    result.Email = userT.Email;
                    result.FullName = userT.FullName;
                    result.PhoneNumber = userT.PhoneNumber;
                    return result;
                }
                else
                {
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }


        }

        public async Task<List<RoleUserView>> getRoleUser(string userId)
        {
            List<RoleUserView> result = new List<RoleUserView>();
            try
            {
                result = await _context.Set<RoleUserView>().FromSqlRaw($"USP_ROLE_USER {userId}").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<StatusView> updateUser(UserDto user)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "update or create user failed !"
            };
            if (user == null)
            {
                return result;
            }
            var temp = await _context.Database.ExecuteSqlRawAsync($"sp_AddOrUpdate_Users '{user.UserId}', '{user.UserPass}', '{user.FullName}', '{user.PhoneNumber}', '{user.Email}'");
            if (temp == 1)
            {
                result.status = "true";
                result.message = "update or create user success";
                return result;
            }
            return result;
        }
    }
}
