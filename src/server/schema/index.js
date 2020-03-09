const {gql} = require('apollo-server-koa')
export const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;