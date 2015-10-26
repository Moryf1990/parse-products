var React = require('react');
var ElectronicsComponent = require('./ElectronicsComponent');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.electronic.get('name')}</td>
				<td>{this.props.electronic.get('price')}</td>
				<td>{this.props.electronic.get('category')}</td>
				<td>{this.props.electronic.get('description')}</td>
			</tr>
		);
	}
});