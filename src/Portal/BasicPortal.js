import React from 'react';
import ReactDOM from 'react-dom';

// Access something outside our app root component
const portalRoot = document.getElementById('portal-root');

class BasicPortal extends React.Component {
	constructor() {
		super();
		this.targetEl = document.createElement('div'); // TargetElement has to be a DOM Element.
	}
	componentDidMount() {
		portalRoot.appendChild(this.targetEl);
	}
	componentWillUnmount() {
		portalRoot.removeChild(this.targetEl);
	}

	render() {
		const { children } = this.props; // To make it reusable. Can render any component.
		return ReactDOM.createPortal(children, this.targetEl);
	}
}

export default BasicPortal;
