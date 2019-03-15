import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			{console.log(props)}
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project title - {id}</span>
					<p>Lorem ipsum</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Postem by devWichrowski</div>
					<div>2nd september, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
