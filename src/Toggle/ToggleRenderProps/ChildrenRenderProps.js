import React, { Component } from 'react';

class ChildrenToggleRenderProps extends Component {
	state = {
		on: false,
		text: 'Hello Component Toggle Children'
	};
	toggle = () => {
		this.setState({
			on: !this.state.on
		});
	};
	render() {
		const { children } = this.props;
		return (
			<React.Fragment>
				<h1>Children Toggle RenderProps</h1>
				{children({
					on: this.state.on,
					text: this.state.text,
					toggle: this.toggle
				})}
			</React.Fragment>
		);
	}
}

export default ChildrenToggleRenderProps;
