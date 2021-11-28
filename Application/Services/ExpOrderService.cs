using Application.IServices;
using Data.Dtos;
using Data.Models;
using Data.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ExpOrderService : IExpOrderService
    {
        private readonly DrugRepositoryDBContext _context;
        public ExpOrderService(DrugRepositoryDBContext context)
        {
            _context = context;
        }
        public async Task<StatusView> createExpOrder(ExpOrderDto request)
        {
            if (request.ExpNote == "")
            {
                request.ExpNote = " ";
            }
            var res = await _context.Database.ExecuteSqlRawAsync($"sp_AddExpOrder'{request.ExpId}', '{request.ExpDate}', '{request.ExpNote}', '{request.CusId}', '{request.UserId}', '{request.ProId}',{request.Quantity}, {request.ExpPrice}");
            if (res > 0)
            {
                StatusView result = new StatusView()
                {
                    status = "success",
                    message = "export product order success !"
                };
                return result;
            }
            else
            {
                StatusView result = new StatusView()
                {
                    status = "failed",
                    message = "export product order failed !"
                };
                return result;
            }
        }

        public async Task<List<ExpOrderView>> getAllExpOrder()
        {
            List<ExpOrderView> result = new List<ExpOrderView>();
            try
            {
                result = await _context.Set<ExpOrderView>().FromSqlRaw("sp_GetAll_ExpOrder").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
