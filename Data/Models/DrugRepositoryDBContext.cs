using System;
using Data.ViewModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Data.Models
{
    public partial class DrugRepositoryDBContext : DbContext
    {
        public DrugRepositoryDBContext()
        {
        }

        public DrugRepositoryDBContext(DbContextOptions<DrugRepositoryDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<ExpOrder> ExpOrder { get; set; }
        public virtual DbSet<ExpOrderDetail> ExpOrderDetail { get; set; }
        public virtual DbSet<ImpOrder> ImpOrder { get; set; }
        public virtual DbSet<ImpOrderDetail> ImpOrderDetail { get; set; }
        public virtual DbSet<LinkProductType> LinkProductType { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<RoleUser> RoleUser { get; set; }
        public virtual DbSet<StoreProduct> StoreProduct { get; set; }
        public virtual DbSet<Supplier> Supplier { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CusId)
                    .HasName("PK__Customer__BA9897F316739C32");

                entity.Property(e => e.CusId)
                    .HasColumnName("cusId")
                    .HasMaxLength(30);

                entity.Property(e => e.CusAddress)
                    .HasColumnName("cusAddress")
                    .HasMaxLength(100);

                entity.Property(e => e.CusEmail)
                    .HasColumnName("cusEmail")
                    .HasMaxLength(30);

                entity.Property(e => e.CusLicense)
                    .HasColumnName("cusLicense")
                    .HasMaxLength(50);

                entity.Property(e => e.CusName)
                    .HasColumnName("cusName")
                    .HasMaxLength(50);

                entity.Property(e => e.CusPhone)
                    .HasColumnName("cusPhone")
                    .HasMaxLength(15);
            });

            modelBuilder.Entity<ExpOrder>(entity =>
            {
                entity.HasKey(e => e.ExpId)
                    .HasName("PK__ExpOrder__F2AC969054F214F6");

                entity.Property(e => e.ExpId)
                    .HasColumnName("expId")
                    .HasMaxLength(30);

                entity.Property(e => e.CusId)
                    .IsRequired()
                    .HasColumnName("cusId")
                    .HasMaxLength(30);

                entity.Property(e => e.ExpDate)
                    .HasColumnName("expDate")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ExpNote)
                    .HasColumnName("expNote")
                    .HasMaxLength(100);

                entity.Property(e => e.ExpStatus).HasColumnName("expStatus");

                entity.Property(e => e.ExpTotal)
                    .HasColumnName("expTotal")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("userId")
                    .HasMaxLength(30);

                entity.HasOne(d => d.Cus)
                    .WithMany(p => p.ExpOrder)
                    .HasForeignKey(d => d.CusId)
                    .HasConstraintName("FK_Export_Customer");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ExpOrder)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Export_User");
            });

            modelBuilder.Entity<ExpOrderDetail>(entity =>
            {
                entity.HasKey(e => e.EodId)
                    .HasName("PK__ExpOrder__FB805AB09E98039C");

                entity.Property(e => e.EodId).HasColumnName("eodId");

                entity.Property(e => e.ExpId)
                    .IsRequired()
                    .HasColumnName("expId")
                    .HasMaxLength(30);

                entity.Property(e => e.ExpPrice)
                    .HasColumnName("expPrice")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ProId)
                    .IsRequired()
                    .HasColumnName("proId")
                    .HasMaxLength(30);

                entity.Property(e => e.ProNote)
                    .HasColumnName("proNote")
                    .HasMaxLength(100);

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.Exp)
                    .WithMany(p => p.ExpOrderDetail)
                    .HasForeignKey(d => d.ExpId)
                    .HasConstraintName("FK_ExpDetail_Export");

                entity.HasOne(d => d.Pro)
                    .WithMany(p => p.ExpOrderDetail)
                    .HasForeignKey(d => d.ProId)
                    .HasConstraintName("FK_ExpDetail_Product");
            });

            modelBuilder.Entity<ImpOrder>(entity =>
            {
                entity.HasKey(e => e.ImpId)
                    .HasName("PK__ImpOrder__C47EB6A825884D8E");

                entity.Property(e => e.ImpId)
                    .HasColumnName("impId")
                    .HasMaxLength(30);

                entity.Property(e => e.ImpDate)
                    .HasColumnName("impDate")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.ImpNote)
                    .HasColumnName("impNote")
                    .HasMaxLength(100);

                entity.Property(e => e.ImpTotal)
                    .HasColumnName("impTotal")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.SupId)
                    .IsRequired()
                    .HasColumnName("supId")
                    .HasMaxLength(30);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("userId")
                    .HasMaxLength(30);

                entity.HasOne(d => d.Sup)
                    .WithMany(p => p.ImpOrder)
                    .HasForeignKey(d => d.SupId)
                    .HasConstraintName("FK_Import_Supplier");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ImpOrder)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Import_User");
            });

            modelBuilder.Entity<ImpOrderDetail>(entity =>
            {
                entity.HasKey(e => e.IodId)
                    .HasName("PK__ImpOrder__255FFF8CDAEAE207");

                entity.Property(e => e.IodId).HasColumnName("iodId");

                entity.Property(e => e.ImpId)
                    .IsRequired()
                    .HasColumnName("impId")
                    .HasMaxLength(30);

                entity.Property(e => e.ProId)
                    .IsRequired()
                    .HasColumnName("proId")
                    .HasMaxLength(30);

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.Imp)
                    .WithMany(p => p.ImpOrderDetail)
                    .HasForeignKey(d => d.ImpId)
                    .HasConstraintName("FK_ImpDetail_Import");

                entity.HasOne(d => d.Pro)
                    .WithMany(p => p.ImpOrderDetail)
                    .HasForeignKey(d => d.ProId)
                    .HasConstraintName("FK_ImpDetail_Product");
            });

            modelBuilder.Entity<LinkProductType>(entity =>
            {
                entity.HasKey(e => e.PtId)
                    .HasName("PK__LinkProd__46E4A1A7DEFB9B50");

                entity.Property(e => e.PtId).HasColumnName("ptId");

                entity.Property(e => e.ProId)
                    .IsRequired()
                    .HasColumnName("proId")
                    .HasMaxLength(30);

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.HasOne(d => d.Pro)
                    .WithMany(p => p.LinkProductType)
                    .HasForeignKey(d => d.ProId)
                    .HasConstraintName("FK_PT_Product");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.LinkProductType)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("FK_PT_Type");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProId)
                    .HasName("PK__Product__5BBBEEF525D46D31");

                entity.Property(e => e.ProId)
                    .HasColumnName("proId")
                    .HasMaxLength(30);

                entity.Property(e => e.ProName)
                    .IsRequired()
                    .HasColumnName("proName")
                    .HasMaxLength(50);

                entity.Property(e => e.ProNo)
                    .IsRequired()
                    .HasColumnName("proNo")
                    .HasMaxLength(20);

                entity.Property(e => e.ProPack)
                    .HasColumnName("proPack")
                    .HasMaxLength(30);

                entity.Property(e => e.ProPrice)
                    .HasColumnName("proPrice")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ProProducer)
                    .HasColumnName("proProducer")
                    .HasMaxLength(50);

                entity.Property(e => e.ProUnit)
                    .HasColumnName("proUnit")
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.HasKey(e => e.TypeId)
                    .HasName("PK__ProductT__F04DF13AB8E775D3");

                entity.Property(e => e.TypeId).HasColumnName("typeId");

                entity.Property(e => e.TypeName)
                    .HasColumnName("typeName")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.RoleId)
                    .HasColumnName("roleId")
                    .HasMaxLength(30);

                entity.Property(e => e.RoleName)
                    .HasColumnName("roleName")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<RoleUser>(entity =>
            {
                entity.HasKey(e => e.RuId)
                    .HasName("PK__RoleUser__80BEBB1CECFC084B");

                entity.Property(e => e.RuId).HasColumnName("ruId");

                entity.Property(e => e.RoleId)
                    .IsRequired()
                    .HasColumnName("roleId")
                    .HasMaxLength(30);

                entity.Property(e => e.UserId)
                    .IsRequired()
                    .HasColumnName("userId")
                    .HasMaxLength(30);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.RoleUser)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_Role");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RoleUser)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_User");
            });

            modelBuilder.Entity<StoreProduct>(entity =>
            {
                entity.HasKey(e => e.SpId)
                    .HasName("PK__StorePro__2DD456E48B3A6EA1");

                entity.Property(e => e.SpId).HasColumnName("spId");

                entity.Property(e => e.ProId)
                    .IsRequired()
                    .HasColumnName("proId")
                    .HasMaxLength(30);

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.Pro)
                    .WithMany(p => p.StoreProduct)
                    .HasForeignKey(d => d.ProId)
                    .HasConstraintName("FK_Store_Product");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.HasKey(e => e.SupId)
                    .HasName("PK__Supplier__B4F221B2A18E0C0D");

                entity.Property(e => e.SupId)
                    .HasColumnName("supId")
                    .HasMaxLength(30);

                entity.Property(e => e.SupAddress)
                    .IsRequired()
                    .HasColumnName("supAddress")
                    .HasMaxLength(100);

                entity.Property(e => e.SupEmail)
                    .IsRequired()
                    .HasColumnName("supEmail")
                    .HasMaxLength(30);

                entity.Property(e => e.SupLicense)
                    .IsRequired()
                    .HasColumnName("supLicense")
                    .HasMaxLength(50);

                entity.Property(e => e.SupName)
                    .IsRequired()
                    .HasColumnName("supName")
                    .HasMaxLength(50);

                entity.Property(e => e.SupNo)
                    .IsRequired()
                    .HasColumnName("supNo")
                    .HasMaxLength(20);

                entity.Property(e => e.SupPhone)
                    .IsRequired()
                    .HasColumnName("supPhone")
                    .HasMaxLength(15);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__CB9A1CFFAA2A456F");

                entity.Property(e => e.UserId)
                    .HasColumnName("userId")
                    .HasMaxLength(30);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(30);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("fullName")
                    .HasMaxLength(50);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasColumnName("phoneNumber")
                    .HasMaxLength(15);

                entity.Property(e => e.UserPass)
                    .IsRequired()
                    .HasColumnName("userPass")
                    .HasMaxLength(30);
            });
            modelBuilder.Entity<InfoUserView>().HasNoKey();
            modelBuilder.Entity<ProductView>().HasNoKey();
            modelBuilder.Entity<ProductTypeView>().HasNoKey();
            modelBuilder.Entity<CustomerView>().HasNoKey();
            modelBuilder.Entity<SupplierView>().HasNoKey();
            modelBuilder.Entity<RoleUserView>().HasNoKey();
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
