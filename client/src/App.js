import React from "react";
import ApolloClient from "apollo-boost";
// to bind apollo to react using "react-apollo" package
import { ApolloProvider } from "react-apollo";

//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//apollo client setup
// prettier-ignore
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.PureComponent {
  render() {
    return (
      // surounding the entire app and enables to get the data from the GraphQL endpoint
      // and inject into React app
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
