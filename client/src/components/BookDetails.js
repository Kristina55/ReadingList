import React, { Component } from "react";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>Output book details</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
