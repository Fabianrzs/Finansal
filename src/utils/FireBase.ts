import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA3Y4WFfO2I8-4JUbXmgOgn85XZ0nv7bZI",
  authDomain: "movil2022-ca457.firebaseapp.com",
  projectId: "movil2022-ca457",
  storageBucket: "movil2022-ca457.appspot.com",
  messagingSenderId: "741604614105",
  appId: "1:741604614105:web:3b159b3856b70dc94c03c8"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export { auth };
