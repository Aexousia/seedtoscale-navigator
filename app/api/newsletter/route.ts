import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabase';

export async function POST(req: Request) {
  try {
    const { email, preferences } = await req.json();

    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email, 
          preferences,
          subscribed_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
