import { NextResponse } from 'next/server';

const mockData = {
  users: Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    posts: Array.from({ length: 3 }, (_, j) => ({
      id: j + 1,
      title: `Post ${j + 1}`,
      content: `Content for post ${j + 1}`
    }))
  }))
};

export async function GET() {
  return NextResponse.json(mockData);
} 