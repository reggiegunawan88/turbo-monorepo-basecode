import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('alt_user_token')?.value || null

  if (userToken) {
    const { role } = JSON.parse(atob(userToken.split('.')[1] || ''))
    // redirect user to domain based on role
    if (role === 'FL') {
      return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_BASE_URL_FRONT_LINER || ''))
    }
  }

  return NextResponse.next()
}
