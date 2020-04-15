const express = require("express");
// provides to express understand graphQL
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({ schema: schema }));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
