using Data.Dtos;
using Data.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Application.IServices
{
    public interface IProductService
    {
        Task<List<ProductView>> getAllProduct();
        Task<List<ProductTypeView>> getAllProductType();
        Task<StatusView> createProduct(ProductDto request);
        Task<StatusView> updateProduct(ProductDto request);
        Task<StatusView> deleteProduct(string request);
    }
}
