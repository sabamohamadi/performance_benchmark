import { createYoga } from 'graphql-yoga';
import { NextRequest, NextResponse } from 'next/server';
import { schema } from '../../../lib/schema';

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response: NextResponse }
});

export async function GET(request: NextRequest) {
  return yoga.fetch(request);
}

export async function POST(request: NextRequest) {
  return yoga.fetch(request);
} 