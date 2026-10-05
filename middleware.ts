import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: { getAll: () => request.cookies.getAll(), setAll: (items: { name: string; value: string; options?: Record<string, unknown> }[]) => items.forEach(({ name, value, options }) => { request.cookies.set(name, value); response = NextResponse.next({ request }); response.cookies.set(name, value, options); }) }
  });
  const { data: { user } } = await supabase.auth.getUser();
  const protectedRoute = /^\/(dashboard|tasks|free-tasks|wallet|withdrawal|profile|packages|deposit|referral|help|notifications|admin)(\/|$)/.test(request.nextUrl.pathname);
  const authRoute = ['/login', '/signup'].includes(request.nextUrl.pathname);
  if (protectedRoute && !user) return NextResponse.redirect(new URL('/login', request.url));
  if (authRoute && user) return NextResponse.redirect(new URL('/dashboard', request.url));
  return response;
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
