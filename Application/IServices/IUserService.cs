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
    }
}
