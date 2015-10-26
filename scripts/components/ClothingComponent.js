var React = require('react');
var ProductModel = require('../models/ProductModel');
var ClothesComponent = require('./ClothesComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {'clothing': []}
	},
	render: function() {
			var allClothing = this.state.clothing.map(function(clothes) {
			return <ClothesComponent key={clothes.id} clothes={clothes}/>
		});
		return (
			<div className="container">
				<div className="row">
					<h1>Clothes</h1>
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
					{allClothing}
					</tbody>
					</table>
				</div>
			</div>
		);
	},
	componentWillMount: function() {
		var self = this;
		console.log('clothing');
		var query = new Parse.Query(ProductModel);
		query.equalTo('category', 'Clothing');
		query.find({
			success: function(list) {
				console.log(list); 
				self.setState({clothing: list});
			}
		});
	}
});