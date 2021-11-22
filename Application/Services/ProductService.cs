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
    public class ProductService : IProductService
    {
        private readonly DrugRepositoryDBContext _context;
        public ProductService(DrugRepositoryDBContext context)
        {
            _context = context;
        }

        public async Task<StatusView> createProduct(ProductDto request)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "create product failed !"
            };
            if (request == null)
            {
                return result;
            }
            Product product = new Product()
            {
                ProId = request.ProId,
                ProName = request.ProName,
                ProNo = request.ProNo,
                ProPack = request.ProPack,
                ProPrice = request.ProPrice,
                ProProducer = request.ProProducer,
                ProUnit = request.ProUnit
            };
            StoreProduct storeProduct = new StoreProduct()
            {
                ProId = request.ProId,
                Quantity = 0
            };
            LinkProductType linkProductType = new LinkProductType()
            {
                ProId = request.ProId,
                TypeId = request.TypeId
            };
            await _context.Product.AddAsync(product);
            await _context.StoreProduct.AddAsync(storeProduct);
            await _context.LinkProductType.AddAsync(linkProductType);
            await _context.SaveChangesAsync();
            result.status = "true";
            result.message = "create success";
            return result;
        }

        public async Task<StatusView> deleteProduct(string request)
        {
            StatusView result = new StatusView()
            {
                status = "false",
                message = "delete product failed !"
            };
            if (request == null)
            {
                return result;
            }
            var product = _context.Product.Find(request);
            _context.Product.Remove(product);
            await _context.SaveChangesAsync();
            result.status = "true";
            result.message = "delete success";
            return result;
        }

        public async Task<List<ProductView>> getAllProduct()
        {
            List<ProductView> result = new List<ProductView>();
            try
            {
                result = await _context.Set<ProductView>().FromSqlRaw("sp_GetAll_Product").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<ProductTypeView>> getAllProductType()
        {
            List<ProductTypeView> result = new List<ProductTypeView>();
            try
            {
                result = await _context.Set<ProductTypeView>().FromSqlRaw("sp_GetAll_ProductType").ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
