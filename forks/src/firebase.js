import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDR0l9WBT1I0aKU-N1kdKKvQw3AwVgUG2o",
    authDomain: "myonedb-b28f7.firebaseapp.com",
    databaseURL: "https://myonedb-b28f7-default-rtdb.firebaseio.com",
    projectId: "myonedb-b28f7",
    storageBucket: "myonedb-b28f7.appspot.com",
    messagingSenderId: "807913636903",
    appId: "1:807913636903:web:2ecf4b6fe13dbe3c8e7a02"
  };

firebase.initializeApp(firebaseConfig);
const db=firebase.database();

export default db