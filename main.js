function indanhsach() {
    const thanhvien = [
        { hovaten: 'Vũ Thị Bạch Diệp', gioitinh: 'Nữ', Noisinh: 'Hưng Yên' },
        { hovaten: 'Nguyễn Đoàn Minh Chi', gioitinh: 'Nữ', Noisinh: 'Hà Nội' },
        { hovaten: 'Dư Thị KIm Thư', gioitinh: 'Nữ', Noisinh: 'Hà Nội' },
        { hovaten: 'Trịnh Duy Đạt Huy', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
        { hovaten: 'Tống Quang Trung', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
        { hovaten: 'Phạm Quang Lâm', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
        { hovaten: 'Vũ Hải Vịnh', gioitinh: 'Nam', Noisinh: 'Hà Nội' },
    ];
 
    // Tìm phần tử HTML có id là "danhsachthanhvien"
    const danhSach = document.getElementById('danhsachthanhvien');
 
    thanhvien.forEach((tv) => { 
        const div = document.createElement('div');
        div.className = 'thanh-vien';
        div.innerHTML = `
            <table style="width: 100%; border-spacing: 10px 5px;">
                <tr>
                    <td style="font-weight: bold; width: 30%;">Họ và tên:</td>
                    <td>${tv.hovaten}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Giới tính:</td>
                    <td>${tv.gioitinh}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Nơi sinh:</td>
                    <td>${tv.Noisinh}</td>
                </tr>
            </table>
        `;
 
        // Thêm CSS để tạo giao diện đẹp hơn
        div.style.marginBottom = '15px'; // Khoảng cách giữa các div
        div.style.padding = '10px'; // Khoảng cách bên trong
        div.style.background = '#f9f9f9'; // Màu nền
        div.style.borderRadius = '5px'; // Bo góc nhẹ
 
        danhSach.appendChild(div); // thêm phần tử div vào danhsach
    });
 }
 
 // Gọi hàm để in danh sách
 indanhsach();