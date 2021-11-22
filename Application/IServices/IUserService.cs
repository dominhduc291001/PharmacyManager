using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface IUserService
    {
        Task<InfoUserView> getInfoUser(string request);
        Task<List<InfoUserView>> getAllUser();
        Task<StatusView> updateUser(UserDto user);
        Task<StatusView> deleteUser(string userId);
        Task<List<RoleUserView>> getRoleUser(string userId);
        Task<StatusView> addRoleUser(RoleUserDto request);

    }
}
