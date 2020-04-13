import firebase from 'firebase'
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAi4CNYeLXfI98l_5v0qyUuDv98im4i4Qs",
    authDomain: "train-b0651.firebaseapp.com",
    databaseURL: "https://train-b0651.firebaseio.com",
    projectId: "train-b0651",
    storageBucket: "train-b0651.appspot.com",
    messagingSenderId: "1006809839895",
    appId: "1:1006809839895:web:7f5447f21451ed248d9f52"
  };

export default function fireStoreAuth() {
    firebase.initializeApp(firebaseConfig);
    const dbh = firebase.firestore();

    dbh.collection("users").doc("mario").set({
        employment: "plumber",
        outfitColor: "red",
        specialAttack: "fireball"
    })
}
