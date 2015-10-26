var React = require('react');
var ClothingComponent = require('./ClothingComponent');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.clothes.get('name')}</td>
				<td>{this.props.clothes.get('price')}</td>
				<td>{this.props.clothes.get('category')}</td>
				<td>{this.props.clothes.get('description')}</td>
			</tr>
		);
	}
});