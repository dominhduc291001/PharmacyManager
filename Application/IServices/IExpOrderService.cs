using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface IExpOrderService
    {
        Task<List<ExpOrderView>> getAllExpOrder();
        Task<StatusView> createExpOrder(ExpOrderDto request);
    }
}
