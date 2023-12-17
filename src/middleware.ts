import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
//put the middleware.ts in the same level of app or pages
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
    console.log("hello"); 

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}