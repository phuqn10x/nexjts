import Image from 'next/image'
import React from 'react'
import sky from "/public/images/sky.jpg";
export default function optimizing() {
  return (
    <div>
      <div>
        sử dụng Image component của nextjs sẽ giúp tối ưu hóa hình ảnh Hình ảnh
        không có kích thước và phông chữ web là nguyên nhân phổ biến gây ra sự
        thay đổi bố cục do trình duyệt phải tải xuống tài nguyên bổ sung. đó
        cũng là lý do Image component của nextjs cần phải có width và height ví
        dụ về việc sử dụng Image component của nextjs :{" "}
      </div>
      tính năng khi sử dụng :<br></br>
      Ngăn chặn việc tự động thay đổi bố cục khi tải hình ảnh.
      <br></br>
      Thay đổi kích thước hình ảnh để tránh gửi hình ảnh lớn đến các thiết bị có
      chế độ xem nhỏ hơn.
      <br></br>
      Tải hình ảnh chậm theo mặc định (hình ảnh tải khi người dùng vào khung
      nhìn).
      <br></br>
      Cung cấp hình ảnh ở các định dạng hiện đại, như WebP và AVIF, khi trình
      duyệt hỗ trợ nó.
      <br></br>
      <Image src={sky} width={500} height={500} alt="Picture of the sky" />
      <Image
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        width={500}
        height={500}
        alt="Picture of the sky"
      />
    </div>
  );
}
