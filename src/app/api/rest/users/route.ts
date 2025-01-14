import { NextResponse } from 'next/server';

const mockUsers = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

export async function GET() {
  return NextResponse.json(mockUsers);
} 