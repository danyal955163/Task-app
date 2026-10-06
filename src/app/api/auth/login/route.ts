export const runtime = 'edge';

import { NextResponse } from 'next/server'; import { createClient } from '../../../../lib/supabase/server';
export async function POST(request:Request){const form=await request.formData(); const supabase=await createClient(); const {error}=await supabase.auth.signInWithPassword({email:String(form.get('email')),password:String(form.get('password'))}); if(error)return NextResponse.redirect(new URL('/login?error=invalid',request.url)); return NextResponse.redirect(new URL('/dashboard',request.url));}
