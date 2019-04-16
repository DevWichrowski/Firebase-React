import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
	return (
		<div>
			{projects &&   // if we have project below will shot
				projects.map((project) => {
					return <ProjectSummary project={project} key={project.id} />;
				})}
		</div>
	);
};
export default ProjectList;
