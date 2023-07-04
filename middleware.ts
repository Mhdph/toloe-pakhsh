import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = 'hi';
  const user = 'mamooli';
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/dashboard') && user !== 'mamooli') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile', '/dashboard/:path*'],
};
