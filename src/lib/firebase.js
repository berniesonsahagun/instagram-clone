/* eslint-disable import/no-named-as-default */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGgRlZMLU-dk98D5dr7BXnAIsjKckKeXM',
  authDomain: 'instagram-clone-4fe28.firebaseapp.com',
  projectId: 'instagram-clone-4fe28',
  storageBucket: 'instagram-clone-4fe28.appspot.com',
  messagingSenderId: '245890783284',
  appId: '1:245890783284:web:63f8319aac433d4be65261'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore();

export { firebase, FieldValue };
