const express = require("express");
// provides to express understand graphQL
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://Kristina:test123@cluster0-gickw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (err, resp) {
  console.log("********** connected to the database");
});

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
