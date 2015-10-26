var React = require('react');
var BooksComponent = require('./BooksComponent');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.book.get('name')}</td>
				<td>{this.props.book.get('price')}</td>
				<td>{this.props.book.get('category')}</td>
				<td>{this.props.book.get('description')}</td>
			</tr>
		);
	}
})