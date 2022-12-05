import firebase from "firebase"
import firestore from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGUDRO3z84DPpJN9Xh__xVyF5_Aul1gs",
  authDomain: "finansalapp-bb718.firebaseapp.com",
  databaseURL: "https://finansalapp-bb718-default-rtdb.firebaseio.com",
  projectId: "finansalapp-bb718",
  storageBucket: "finansalapp-bb718.appspot.com",
  messagingSenderId: "614037671609",
  appId: "1:614037671609:web:df7b954fa4caa5a2e75568"
};

let app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
firebase.firestore().settings({ experimentalForceLongPolling: true, merge:true  }); //add this..
const db = firebase.firestore(app)
export { auth, db };
