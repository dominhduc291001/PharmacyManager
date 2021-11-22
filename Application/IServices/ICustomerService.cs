using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface ICustomerService
    {
        Task<List<CustomerView>> getAllCustomer();
        Task<StatusView> updateOrCreateCustomer(CustomerDto request);
        Task<StatusView> deleteCustomer(string cusId);
    }
}
