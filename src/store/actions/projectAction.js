export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = (payload) => {
	return (dispatch, getState) => {
		// make async call to db
		dispatch({ type: CREATE_PROJECT, payload });
	};
};