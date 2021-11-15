using Application.IServices;
using Data.Dtos;
using Data.Models;
using Data.ViewModels;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class AuthService : IAuthServeice
    {
        private readonly DrugRepositoryDBContext _context;
        private object _configuration;

        public AuthService(DrugRepositoryDBContext context)
        {
            _context = context;
        }

        public async Task<LoginView> Login(LoginDto request)
        {
            if(request == null)
            {
                return await Task.FromResult(new LoginView() { userId = "", token = "" });
            }
            try
            {
                var res = _context.
                //{
                    //return Task.FromResult(new LoginView() { userId = "", token = "" });
                //}                
            } catch(Exception ex)
            {
                throw ex;
            }
            return await Task.FromResult(new LoginView() { userId = "", token = "" });
        }
    }
}
