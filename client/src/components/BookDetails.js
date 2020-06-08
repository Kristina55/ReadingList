import React from 'react';
// to bind apollo to react using "react-apollo" package
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

// AddBook Class Component
class BookDetails extends React.PureComponent {
	displayBookDetails() {
		const { book } = this.props.data;
		if (book) {
			return (
				<div>
					<h2>{book.name}</h2>
					<p>{book.genre}</p>
					<p>{book.author.name}</p>
					<p>All Books by this author:</p>
					<ul className="other-books">
						{book.author.books.map((item) => {
							return <li key={item.id}>{item.name}</li>;
						})}
					</ul>
				</div>
			);
		} else {
			return <div>No book selected...</div>;
		}
	}
	render() {
		console.log('BookDetails rerender', this.props);
		return <div id="book-details">{this.displayBookDetails()}</div>;
	}
}

export default graphql(getBookQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.bookId
			}
		};
	}
})(BookDetails);
