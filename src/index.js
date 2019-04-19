import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(
	rootReducer,
	{},
	compose(
		composeWithDevTools(
			applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
			reduxFirestore(fbConfig),
			reactReduxFirebase(fbConfig, { attachAuthIsReady: true }) // With that and no.2 app will not render untill checked if logged in
		)
	)
);

store.firebaseAuthIsReady.then(() => { // no.2
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);

	serviceWorker.unregister();
});
