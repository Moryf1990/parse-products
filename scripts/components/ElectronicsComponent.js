var React = require('react');
var ProductModel = require('../models/ProductModel');
var ElectronicRowComponent = require('./ElectronicRowComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'electronics': []}
	},
	render: function() {
		var allElectronics = this.state.electronics.map(function(electronic) {
			return <ElectronicRowComponent key={electronic.id} electronic={electronic}/>
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Electronics</h1>
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
					{allElectronics}
					</tbody>
					</table>
				</div>
			</div>
		);
	},
	componentWillMount: function() {
		var self = this;
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'Electronics');
		query.find({
			success: function(list) {
				console.log(list); 
				self.setState({electronics: list});
			}
		});
	}
});