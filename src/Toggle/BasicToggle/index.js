import React, { Component } from 'react';

class Toggle extends Component {
	state = {
		on: false
	};
	toggle = () => {
		this.setState({
			on: !this.state.on
		});
	};
	render() {
		return (
			<React.Fragment>
				<h1>Basic Toggle</h1>
				{this.state.on && <p>{this.props.children}</p>}
				<button onClick={this.toggle}>Show/Hide</button>
			</React.Fragment>
		);
	}
}

export default Toggle;
