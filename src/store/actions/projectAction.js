export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = (payload) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to db
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				// this add colleciton to fire store
				...payload,
				authorFirstName: 'Patryk',
				authorLastName: 'Wichrow',
				authorID: 12345,
				createdAt: new Date()
			})
			.then(() => {
				dispatch({ type: CREATE_PROJECT, payload });
			})
			.catch((error) => {
				dispatch({ type: CREATE_PROJECT_ERROR, error });
			});
	};
};
