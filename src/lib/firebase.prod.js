import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDIwRcQqTzmZu9-0aZMiW1YHbnGzZa1lto",
  authDomain: "netflix-clone-632d3.firebaseapp.com",
  databaseURL: "https://netflix-clone-632d3.firebaseio.com",
  projectId: "netflix-clone-632d3",
  storageBucket: "netflix-clone-632d3.appspot.com",
  messagingSenderId: "797386284748",
  appId: "1:797386284748:web:c23b04c4b2946c008cac69"
}

const firebase = Firebase.initializeApp(config)

export { firebase }