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
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>BookName</li>
        </ul>
      </div>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default graphql(getBooksQuery)(BookList);
