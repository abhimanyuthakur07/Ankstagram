import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyAGX9NURZHwpK7AMXD9j9eKjzQ0slagHEo",
    authDomain: "ankstagram-53093.firebaseapp.com",
    databaseURL: "https://ankstagram-53093.firebaseio.com",
    projectId: "ankstagram-53093",
    storageBucket: "ankstagram-53093.appspot.com",
    messagingSenderId: "848264206344",
    appId: "1:848264206344:web:415b5d92b2374acbd499bd"
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };