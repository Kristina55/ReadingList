import React, { Component } from "react";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

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
        <BookDetails />
      </div>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default graphql(getBooksQuery)(BookList);
