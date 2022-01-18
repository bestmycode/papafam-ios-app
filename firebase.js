// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD3gwjZNdyBveaOiuPp3zyI0YZ9nOsOLRY',
	authDomain: 'papafam-ios-app.firebaseapp.com',
	projectId: 'papafam-ios-app',
	storageBucket: 'papafam-ios-app.appspot.com',
	messagingSenderId: '163182958637',
	appId: '1:163182958637:web:9eea760f758bfd89d000a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
