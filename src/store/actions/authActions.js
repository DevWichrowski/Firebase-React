export const SIGN_IN = 'SIGN_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const signIn = (props) => {
	return (dispatch, getState, { getFirebase }) => {
		// getFirebase to destrucure and get to the firebase project
		const firebase = getFirebase(); // to get firebase

		firebase
			.auth()
			.signInWithEmailAndPassword(props.email, props.password)
			.then(() => {
				dispatch({ type: LOGIN_SUCCESS });
			})
			.catch((error) => {
				dispatch({ type: LOGIN_ERROR, error });
			});
	};
};
