import { createYoga } from 'graphql-yoga';
import { createSchema } from 'graphql-yoga';

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

const schema = createSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String!
      content: String!
    }

    type User {
      id: Int!
      name: String!
      email: String!
      posts: [Post!]!
    }

    type Query {
      users: [User!]!
    }
  `,
  resolvers: {
    Query: {
      users: () => mockData.users
    }
  }
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql'
});

export { handleRequest as GET, handleRequest as POST }; 