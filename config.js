import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCcfg1eCy6pM493XK8oTGu7HY0tBcHa_4",
  authDomain: "bd2022-1d385.firebaseapp.com",
  projectId: "bd2022-1d385",
  storageBucket: "bd2022-1d385.appspot.com",
  messagingSenderId: "125004705888",
  appId: "1:125004705888:web:4b3606bebdca62ac31d305"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();