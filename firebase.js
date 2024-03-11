import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQqqarKIhnDi4nS9puqyzKK4KPyepE9rY",
    authDomain: "driver-c46cb.firebaseapp.com",
    projectId: "driver-c46cb",
    storageBucket: "driver-c46cb.appspot.com",
    messagingSenderId: "539574035558",
    appId: "1:539574035558:web:2049c7a6eba10368fe79a7",
    measurementId: "G-855PZ19PYK"
};

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };

