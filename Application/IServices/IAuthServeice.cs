using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface IAuthServeice
    {
        Task<LoginView> Login(LoginDto request);
    }
}
