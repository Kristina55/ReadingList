import React, { Component } from "react";
// to bind apollo to react using "react-apollo" package
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }
  displayAuthors() {
    let data = this.props.getAuthorsQuery;
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
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBookMutation();
  };
  render() {
    const { name, genre } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book Name:</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="genre"
            value={genre}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={this.handleChange} name="authorId">
            <option>Select Author:</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}
// bind the query to the component and have access in props
// of the data that comes back from the query
export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
