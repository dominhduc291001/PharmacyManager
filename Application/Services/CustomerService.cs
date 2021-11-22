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
    public class CustomerService : ICustomerService
    {
        private readonly DrugRepositoryDBContext _context;
        public CustomerService(DrugRepositoryDBContext context)
        {
            _context = context;
        }
        public async Task<StatusView> deleteCustomer(string cusId)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "delete product failed !"
            };
            if (cusId == null)
            {
                return result;
            }
            var customer = _context.Customer.Find(cusId);
            _context.Customer.Remove(customer);
            await _context.SaveChangesAsync();
            result.status = "true";
            result.message = "delete success";
            return result;
        }

        public async Task<List<CustomerView>> getAllCustomer()
        {
            List<CustomerView> result = new List<CustomerView>();
            try
            {
                result = await _context.Set<CustomerView>().FromSqlRaw("sp_GetAll_Customer").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<StatusView> updateOrCreateCustomer(CustomerDto request)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "update or create customer failed !"
            };
            if (request == null)
            {
                return result;
            }
            var temp = await _context.Database.ExecuteSqlRawAsync($"sp_AddOrUpdate_Customer {request.CusId}, {request.CusName}, {request.CusEmail}, {request.CusPhone}, {request.CusAddress}, {request.CusLicense}");
            if (temp == 1)
            {
                result.status = "true";
                result.message = "update or create customer success";
                return result;
            }
            return result;
        }
    }
}
