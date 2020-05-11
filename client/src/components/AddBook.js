import React, { Component } from "react";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  displayAuthors() {
    let data = this.props.data;
    if (data.loading) {
      return <option>Loading authors....</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }
  render() {
    return (
      <form>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author:</option>
            {this.displayAuthors()}
          </select>
        </div>
      </form>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default graphql(getAuthorsQuery)(AddBook);
