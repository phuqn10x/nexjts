import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside

const privatePaths = ["/me"]
const authPaths = ["/login", "/register"]
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  console.log("sessionToken",sessionToken);
  
  if (privatePaths.includes(pathname) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authPaths.includes(pathname) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.url));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/me"],
};