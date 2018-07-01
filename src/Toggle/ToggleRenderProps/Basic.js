import React, { Component } from 'react';

class ToggleRenderProps extends Component {
	state = {
		on: false,
		text: 'Hello Piyush'
	};
	toggle = () => {
		this.setState({
			on: !this.state.on
		});
	};
	render() {
		const { render } = this.props;
		return (
			<React.Fragment>
				<h1>Basic Toggle RenderProps</h1>
				{render({
					on: this.state.on,
					text: this.state.text,
					toggle: this.toggle
				})}
			</React.Fragment>
		);
	}
}

export default ToggleRenderProps;
