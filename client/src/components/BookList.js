import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import uuid from "uuid/v4";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          <li>BookName</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
