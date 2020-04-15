const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString } = graphql;

// I have installed lodash to find data or change data easily

let books = [
  { name: "Name of the Wind", genre: "Fantazy", id: "1" },
  { name: "The Final Empire", genre: "Fantazy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const BookType = GraphQLObjectType({
  name: Book,
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, ards) {
        // using lodash loop trough the array and find the book with the id
        // that is attached to the args property
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLObjectType({
  query: RootQuery,
});
