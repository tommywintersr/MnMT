import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0TDAmRo5OVtcMJfeCRjdJROsYZCXl_IA",
    authDomain: "train-92cff.firebaseapp.com",
    databaseURL: "https://train-92cff.firebaseio.com",
    projectId: "train-92cff",
    storageBucket: "train-92cff.appspot.com",
    messagingSenderId: "73412831040",
    appId: "1:73412831040:web:9552bed42b3aabf0207ca5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;