import React, { Component } from 'react';
import Portal from './BasicPortal';
import styled from 'styled-components';

class ReusableModal extends Component {
	render() {
		return (
			<Portal>
				{this.props.on && (
					<ModalWrapper>
						<ModalContent>
							{this.props.children}
							<p>This is a modal.</p>
							<button onClick={this.props.toggle}>Close Modal</button>
						</ModalContent>
					</ModalWrapper>
				)}
			</Portal>
		);
	}
}

const ModalWrapper = styled.div`
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background: #fefefe;
	padding: 20px;
	min-height: 50%;
	width: 82%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default ReusableModal;
