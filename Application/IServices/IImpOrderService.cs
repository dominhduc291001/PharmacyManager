using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface IImpOrderService
    {
        Task<List<ImpOrderView>> getAllImpOrder();
        Task<StatusView> CreateImpOrder(ImpOrderDto request);
    }
}
