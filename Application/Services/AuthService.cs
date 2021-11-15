using Application.IServices;
using Data.Dtos;
using Data.Models;
using Data.ViewModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly DrugRepositoryDBContext _context;
        public IConfiguration _configuration;
        public AuthService(DrugRepositoryDBContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<LoginView> Login(LoginDto request)
        {
            LoginView result = new LoginView();
            {
                result.token = "";
            };
            if (request == null)
            {
                return result;
            }
            try
            {
                var res = await _context.Users.FromSqlRaw($"USP_CHECK_LOGIN {request.userId}, {request.userPass}").ToListAsync();
                var userT = res.FirstOrDefault();
                if (userT != null)
                {
                    var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("userId",userT.UserId),
                };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.UtcNow.AddDays(1), signingCredentials: signIn);
                    result.token = new JwtSecurityTokenHandler().WriteToken(token);
                    return result;
                }
                else
                {
                    return result;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
