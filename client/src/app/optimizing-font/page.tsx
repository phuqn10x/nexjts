import Image from 'next/image'
import React from 'react'
import sky from "/public/images/sky.jpg";
import { Abel } from 'next/font/google';

// const roboto = Abel({
//   subsets: ["latin"],
//   weight: "400"
// })

export default function optimizing() {
  return (
    <div>
      <div>
        sử dụng next/font của nextjs sẽ giúp tối ưu hóa font chữ Hình ảnh không
        có kích thước và phông chữ web là nguyên nhân phổ biến gây ra sự thay
        đổi bố cục do trình duyệt phải tải xuống tài nguyên bổ sung.
      </div>
      tính năng khi sử dụng :<br></br>
      Ngăn chặn việc bị giật giao diện khi vào (rất xấu UI)
      <br></br>
      sẽ tải xuống các tệp phông chữ tại thời điểm xây dựng và lưu trữ chúng
      cùng với các nội dung tĩnh khác của bạn trước khi ứng dụng của bạn được
      khởi chạy
      <br></br>
      ví dụ về việc sử dụng next/font của nextjs :
      <p className="jersey-20-regular">đây là ví dụ apply font thủ công</p>
      {/* <p className={roboto.className}>đây là ví dụ apply font nextjs</p> */}
    </div>
  );
}
