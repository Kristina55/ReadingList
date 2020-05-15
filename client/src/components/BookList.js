import React from "react";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

class BookList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading books....</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={(e) => {
              this.setState({ selected: book.id });
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  }

  render() {
    const { selected } = this.state;

    // we have two data objects in console
    // the first one because React first loads (renders) in the browser
    // so the Query is going in the background without the data
    // when we get data returned from the server it updates the props object
    // React re-renders and we have acces books array
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={selected} />
      </div>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default graphql(getBooksQuery)(BookList);
