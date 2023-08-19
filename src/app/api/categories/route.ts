import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')

  if (error) return NextResponse.json({ error }, { status: 500 })

  return NextResponse.json(categories, { status: 200 })
}
