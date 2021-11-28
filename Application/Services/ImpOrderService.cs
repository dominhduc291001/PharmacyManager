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
    public class ImpOrderService : IImpOrderService
    {
        private readonly DrugRepositoryDBContext _context;
        public ImpOrderService(DrugRepositoryDBContext context)
        {
            _context = context;
        }
        public async Task<StatusView> CreateImpOrder(ImpOrderDto request)
        {
            if(request.ImpNote == "")
            {
                request.ImpNote = " ";
            }
            var res = await _context.Database.ExecuteSqlRawAsync($"sp_AddImpOrder '{request.ImpId}', '{request.ImpDate}', '{request.ImpNote}', '{request.UserId}', '{request.SupId}', '{request.ProId}', {request.Quantity}");
            if(res > 0)
            {
                StatusView result = new StatusView()
                {
                    status = "success",
                    message = "import product order success !"
                };
                return result;
            }
            else
            {
                StatusView result = new StatusView()
                {
                    status = "failed",
                    message = "import product order failed !"
                };
                return result;
            }
            
        }

        public async Task<List<ImpOrderView>> getAllImpOrder()
        {
            List<ImpOrderView> result = new List<ImpOrderView>();
            try
            {
                result = await _context.Set<ImpOrderView>().FromSqlRaw("sp_GetAll_ImpOrder").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
