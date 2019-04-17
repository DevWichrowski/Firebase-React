import * as ProjectActions from '../actions/projectAction';

const initState = {
	projects: [
		{ id: 1, title: 'help me find peach', content: 'blasdfas' },
		{ id: 2, title: 'collect all stars', content: 'blasdfas' },
		{ id: 3, title: 'ehh hunt', content: 'blasdfas' }
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case ProjectActions.CREATE_PROJECT: {
			console.log('Created project', action.payload);
			return { ...state, projects: [ ...state.projects, action.payload ] };
		}
	}
	return state;
};

export default projectReducer;
