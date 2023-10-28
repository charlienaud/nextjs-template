import { auth } from 'auth';
import type { NextAuthRequest } from 'next-auth/lib';
import { NextResponse } from 'next/server';

export default auth((request: NextAuthRequest) => {
  const { pathname } = request.nextUrl;

  // Public routes
  if (
    // exclude Next.js internals
    pathname.startsWith('/_next') ||
    // excludes auth routes
    pathname.startsWith('/api/auth') ||
    // exclude public images
    pathname.startsWith('/images/') ||
    // exclude home page
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // If not logged in, redirect to login page
  if (!request.auth) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // If logged in, allow access to any page
  return NextResponse.next();
});
