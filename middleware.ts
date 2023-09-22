import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  let token = request.cookies.get('token')?.value;
  let userRole = request.cookies.get('role')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/dashboard') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/profile', '/dashboard/:path*'],
};
