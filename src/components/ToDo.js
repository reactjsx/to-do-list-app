import React from 'react';

const ToDo = props => (
	<li
		onClick={ props.onClick }
	>
		{ props.content }
	</li>
);

export default ToDo;