import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};

	//Use the arrow function as a value to the method to bind this
	handleIncrement = () => {
		console.log('Increment Clicked!', this);
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
					Increment
				</button>
			</React.Fragment>
		);
	}

	formatCount() {
		return this.state.count === 0 ? 'Zero' : this.state.count;
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'secondary';
		return classes;
	}
}

export default Counter;
