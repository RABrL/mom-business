import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {}

export async function POST(req: NextRequest) {
  return NextResponse.json({ body: 'Hello World' })
}
