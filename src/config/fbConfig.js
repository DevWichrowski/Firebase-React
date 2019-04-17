import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyCbiYv8WV2JNqSMk6hgWusEVb1PdERXulw',
	authDomain: 'fir-react-app-826cd.firebaseapp.com',
	databaseURL: 'https://fir-react-app-826cd.firebaseio.com',
	projectId: 'fir-react-app-826cd',
	storageBucket: 'fir-react-app-826cd.appspot.com',
	messagingSenderId: '221082949318'
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;