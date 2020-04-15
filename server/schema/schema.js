const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

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
      resolve(parent, ards) {},
    },
  },
});

module.exports = new GraphQLObjectType({
  query: RootQuery,
});
