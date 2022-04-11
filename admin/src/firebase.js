import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFoEP4higNc5kqnvPTsrjY1dB5eZEdf54",
    authDomain: "clonenetflix-84436.firebaseapp.com",
    projectId: "clonenetflix-84436",
    storageBucket: "clonenetflix-84436.appspot.com",
    messagingSenderId: "754674278653",
    appId: "1:754674278653:web:4c1fee8e5b932143125e94",
    measurementId: "G-ELC2NNQ8MX"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;