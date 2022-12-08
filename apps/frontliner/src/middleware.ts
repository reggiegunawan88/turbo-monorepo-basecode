import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (!request.cookies.has('alt_user_token')) {
    // if token is not exist, kick user to auth domain
    return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_BASE_URL_AUTHENTICATION || ''))
  }
  return NextResponse.next()
}
