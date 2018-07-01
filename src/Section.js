import React from 'react';

const Section = ({ children }) => {
	return (
		<React.Fragment>
			<section>{children}</section>
			<hr />
		</React.Fragment>
	);
};

export default Section;
