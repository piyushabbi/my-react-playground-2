import React, { Component } from 'react';

import Section from './Section';
import BasicToggle from './Toggle/BasicToggle';
import BasicToggleRenderProps from './Toggle/ToggleRenderProps/Basic';
import ChildrenToggleRenderProps from './Toggle/ToggleRenderProps/ChildrenRenderProps';

import BasicPortal from './Portal/BasicPortal';
import Modal from './Portal/ReusableModal';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 style={{ textAlign: 'center' }}>Some Advanced Concepts</h1>
				<Section>
					<BasicToggle>This is a basic Toggle with Children</BasicToggle>
				</Section>

				<Section>
					<BasicToggleRenderProps
						render={({ on, toggle, text }) => (
							<React.Fragment>
								{on && <p>Toggle {text}</p>}
								<button onClick={toggle}>Show/Hide</button>
							</React.Fragment>
						)}
					/>
				</Section>

				<Section>
					<ChildrenToggleRenderProps>
						{/* props.children will be an arrow function returning the jsx */}
						{({ on, toggle, text }) => (
							<React.Fragment>
								{on && <p>{text}</p>}
								<button onClick={toggle}>Show/Hide</button>
							</React.Fragment>
						)}
					</ChildrenToggleRenderProps>
				</Section>

				<Section>
					<h2>Some Portal</h2>
					<BasicPortal>
						<h3>Hi! I'm in a portal...</h3>
					</BasicPortal>
				</Section>

				<Section>
					<h2>Modal Trigger</h2>
					<p>This section will trigger a reusable modal!</p>
					<ChildrenToggleRenderProps>
						{/* props.children will be an arrow function returning the jsx */}
						{({ on, toggle }) => (
							<React.Fragment>
								<Modal on={on} toggle={toggle}>
									<h1>Still in a modal</h1>
								</Modal>
								<button onClick={toggle}>Show Modal</button>
							</React.Fragment>
						)}
					</ChildrenToggleRenderProps>
				</Section>
			</React.Fragment>
		);
	}
}

export default App;
