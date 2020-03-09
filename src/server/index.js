const Koa = require("koa") //from 'koa';
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { ApolloServer, gql } = require('apollo-server-koa');
const {find, filter} = require('lodash')
// 三个指令 deprecated 标记删除不推荐使用
// skip 忽略

const typeDefs = gql`
    type Book {
        name: String@deprecated(reason: "use 'title'")
        title: String
        author: Author
        price: Float
    }
    
    type Author {
        id: ID
        name: String
        books:[Book]
    }
    type Query {
        author(id: ID): Author
        getAuthors: [Author]
        book(title: String): Book
        getBooks: [Book]
    }
    type Mutation {
        changeBookPrice(title: String, price: Float): Book
    }
`;
const books = [
   {
    title: "神雕侠侣",
    author: '1',
    price: 20.32
  },
   {
    title: "射雕英雄传",
    name: "射雕英雄传",
    author: '1',
    price: 30.32
  },
   {
    title: "笑傲江湖",
    author: '1',
    price: 40.32
  },
   {
    title: "鹿鼎记",
    author: '1',
    price: 50.32
  },
   {
    title: "书剑恩仇录",
    author: '1',
    price: 10.32
  },
   {
    title: "雪山飞狐",
    author: '1',
    price: 80.32
  },
  {
    title: '天涯明月刀',
    author: '2',
    price: 73.32
  },
  {
    title: '多情剑客无情剑',
    author: '2',
    price: 30.32
  },
  {
    title: '流星蝴蝶剑',
    author: '2',
    price: 33.32
  },
  {
    title: '绝代双骄',
    author: '2',
    price: 76.32
  },
  {
    title: '楚留香传奇',
    author: '2',
    price: 29.32
  },
]
const authors =[
    {
        id: '1',
        name: '金庸',
    },
    {
        id: '2',
        name: '古龙'
    }
]

const resolvers ={
    Query: {
        author(parent, args, context, info){
            console.log(args)
            return find(authors, { id: args.id})
        },
        getAuthors(){
            return authors;
        },
        getBooks() {
            return books;
        },
        book(parent, args) {
            return find(books, {title: args.title})
        }
    },
    Mutation: {
        changeBookPrice(parent, args, ctx, info) {
            let book = find(books, {title: args.title})
            if(book) {
                book.price = args.price
            }
            return book
        }
    },

    Author: {
        books(author) {
            console.log('xxx',author)
            return filter(books, {author: author.id})
        }
    },
    Book: {
        author(book) {
            return find(authors, {id: book.author})
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);