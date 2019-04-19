import * as AuthActions from '../actions/authActions';

const initState = {
	authError: null
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case AuthActions.LOGIN_ERROR: {
			console.log('login failed!');
			return {
				...state,
				authError: 'Login Failed !!'
			};
		}
		case AuthActions.LOGIN_SUCCESS: {
			console.log('login success');
			return {
				...state,
				authError: null
			};
        }
        case AuthActions.SIGN_OUT_SUCCESS: {
            console.log('SIGNED OUT SUCCESS');
            return state;
        }

        default:{
            return state;
        }
	}
};

export default authReducer;
