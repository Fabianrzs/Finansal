import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCUGUDRO3z84DPpJN9Xh__xVyF5_Aul1gs",
  authDomain: "finansalapp-bb718.firebaseapp.com",
  databaseURL: "https://finansalapp-bb718-default-rtdb.firebaseio.com",
  projectId: "finansalapp-bb718",
  storageBucket: "finansalapp-bb718.appspot.com",
  messagingSenderId: "614037671609",
  appId: "1:614037671609:web:543bdb7468d81190e75568"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export { auth };
