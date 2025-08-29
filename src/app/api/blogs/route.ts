import { NextResponse } from 'next/server'
import blogs from '@/data/blogs.json'

export async function GET() {
  return NextResponse.json(blogs)
}


