using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface ISupplierService
    {
        Task<List<SupplierView>> getAllSupplier();
        Task<StatusView> updateOrCreateSupplier(SupplierDto request);
        Task<StatusView> deleteSupplier(string supId);
    }
}
