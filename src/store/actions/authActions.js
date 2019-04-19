export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

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

export const signOut = (props) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: SIGN_OUT_SUCCESS });
		});
	};
};
