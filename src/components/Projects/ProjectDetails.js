import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	const { project } = props;
	if (project) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title"> {project.title} </span>
						<p>{project.content}</p>
					</div>
					<div className="card-action gret lighten-4 grey-text">
						<div>
							Postem by {project.authorFirstName} {project.authorLastName}
						</div>
						<div>2nd september, 2am</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div className="container center">Loading project...</div>;
	}
};

const mapStateToProps = (state, myProps) => {
	// need to do that becouse react don't pass automaticly the props.
	const id = myProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null; // projects[id] will find individual project that id match to it and save in in projec.
	return {
		project
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'projects' } ]))(ProjectDetails);
