export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

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

export const signUp = (props) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase
			.auth()
			.createUserWithEmailAndPassword(props.email, props.password)
			.then((resp) => {
				return firestore.collection('users').doc(resp.user.uid).set({
					// add to specific uid = id
					firstName: props.firstName,
					lastName: props.lastName,
					initials: props.firstName[0] + props.lastName[0]
				})
			})
			.then(() => {
				dispatch({ type: SIGN_UP_SUCCESS });
			})
			.catch((error) => {
				dispatch({ type: SIGN_UP_ERROR, error });
			});
	};
};
