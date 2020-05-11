import React, { Component } from "react";
import { gql } from "apollo-boost";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading books....</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default graphql(getBooksQuery)(BookList);
