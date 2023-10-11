# Website Admin Đồ Nội Thất

## Mô tả

Đây là một ứng dụng web admin được phát triển bằng Next.js và sử dụng MongoDB để quản lý và điều hành một trang web bán đồ nội thất. Ứng dụng được thiết kế để cung cấp giao diện quản trị cho người quản lý để thực hiện các nhiệm vụ quan trọng như quản lý sản phẩm, đơn hàng, danh mục, và nhiều tính năng khác.

## Các Tính Năng Chính

1. **Quản lý Sản Phẩm**: Cho phép thêm, chỉnh sửa và xóa sản phẩm. Bao gồm cập nhật hình ảnh, giá cả, và thông tin sản phẩm.
    
2. **Quản lý Danh Mục**: Thêm, sửa đổi và xóa danh mục sản phẩm. Danh mục giúp người dùng dễ dàng tìm kiếm sản phẩm.
    
3. **Quản lý Đơn Hàng**: Hiển thị danh sách các đơn hàng, xem chi tiết đơn hàng, và cập nhật trạng thái đơn hàng.
    
4. **Quản lý Người Dùng**: Quản lý thông tin người dùng, cấp quyền truy cập và xác thực.
    
5. **Quản lý Báo Cáo**: Hiển thị báo cáo về hoạt động kinh doanh, doanh số bán hàng, và các dữ liệu quan trọng khác.
    
6. **Xác thực và Phân quyền**: Đảm bảo tính bảo mật bằng việc xác thực người dùng và quản lý quyền truy cập.
    

## Cài Đặt

### Yêu Cầu

- Node.js và npm đã được cài đặt.
- MongoDB đã được cài đặt và chạy.

### Bước 1: Clone dự án

Clone dự án từ GitHub:

```bash
git clone https://github.com/minhphamhk123/furniture_shop_admin.git 
cd your-furniture-admin
```

### Bước 2: Cài đặt các gói phụ thuộc

```bash
npm install
```

### Bước 3: Thiết lập biến môi trường

Tạo một tệp `.env` trong thư mục gốc của dự án và cung cấp các thông tin cấu hình cần thiết như cổng và chuỗi kết nối MongoDB:

```plaintext
PORT=3000 MONGODB_URI=mongodb://localhost:27017/furniture-shop SECRET_KEY=your-secret-key
```

### Bước 4: Khởi chạy ứng dụng

```bash
npm run dev
```

Ứng dụng sẽ khởi chạy tại `http://localhost:3000`.

## Tài Liệu Tham Khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
