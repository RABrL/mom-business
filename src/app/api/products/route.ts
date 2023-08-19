import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'

export async function GET(req: Request) {}

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const body: Omit<Products, 'id'> = await req.json()

  if (!body) {
    return NextResponse.json({ error: 'No body provided' }, { status: 400 })
  }

  if (!body.name) {
    return NextResponse.json(
      { error: 'El nombre es requerido' },
      { status: 400 }
    )
  }

  if (!body.unit_price) {
    body.unit_price = 0
  }

  if (!body.unit_cost) {
    body.unit_cost = 0
  }

  if (!body.stock) {
    body.stock = 0
  }


  const { data, error } = await supabase.from('products').insert([body])
  console.log(error)
  if (error) {
    return NextResponse.json(
      { error: 'Error al crear el producto' },
      { status: 500 }
    )
  }
  return NextResponse.json({ data, error }, { status: 201 })
}
