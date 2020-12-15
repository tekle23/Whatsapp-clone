import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAvWYfZO03MTTYGVfWHUzhaf6kWDe16pM",
  authDomain: "whatsapp-clone-c4c1c.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c4c1c.firebaseio.com",
  projectId: "whatsapp-clone-c4c1c",
  storageBucket: "whatsapp-clone-c4c1c.appspot.com",
  messagingSenderId: "27506831278",
  appId: "1:27506831278:web:975ef75761d3366e77223f",
  measurementId: "G-Z1HV3GV6RX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;