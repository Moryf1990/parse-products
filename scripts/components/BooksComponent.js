var React = require('react');
var ProductModel = require('../models/ProductModel');
var BookRowComponent = require('./BookRowComponent');

module.exports = React.createClass({
	getInitialState: function(){
		return {'books': []}
	},
	render: function() {
		console.log(this.state);
		var allBooks = this.state.books.map(function(book) {
			return <BookRowComponent key={book.id} book={book}/>
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Books</h1>
					<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
					{allBooks}
					</tbody>
					</table>
				</div>
			</div>
		);
	},

	componentWillMount: function() {
		var self = this;
		console.log('books');
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'Books');
		query.find({
			success: function(list) {
				console.log(list); 
				self.setState({books: list});
			}
		});
	}
});