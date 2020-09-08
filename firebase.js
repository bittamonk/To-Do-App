import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlxS9t2WfnFvYwtl9GZRVYjqgydnl1Djs",
  authDomain: "todo-app-e5b2f.firebaseapp.com",
  databaseURL: "https://todo-app-e5b2f.firebaseio.com",
  projectId: "todo-app-e5b2f",
  storageBucket: "todo-app-e5b2f.appspot.com",
  messagingSenderId: "9366736625",
  appId: "1:9366736625:web:a5fc224263e3ae551f2350",
  measurementId: "G-YJWPXXPNQ1",
});

const db = firebaseApp.firestore();

export default db;
