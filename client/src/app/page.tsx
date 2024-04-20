import Image from "next/image";
import sky from "/public/images/sky.jpg";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import ButtonRedirect from "@/components/ui/ButtonRedirect";
const isAuth = true
export default function Home() {
  // dùng redirect để chuyển hướng khi có điều kiện
  // nextjs nói redirect là dùng cho server component thôi
  // nhưng vẫn sẽ dùng được trong client component
  // miễn là không sử dụng trong một hàm event handle
  if(!isAuth){
    redirect('/login')
  }
  return (
    
    <main className="text-4xl text-center jacquarda-bastarda-9-regular">
    
   
         {/* dùng useRouter để chuyển hướng  */}
        {/* <ButtonRedirect /> */}
        {/* dùng Component Link để chuyển hướng */}
        {/* <Link href="/login">Login </Link> */}
        <Link href="/optimizing-image"> Optimizing Image</Link>
        <Link href="/optimizing-font"> Optimizing Font</Link>
    </main>
  );
}
