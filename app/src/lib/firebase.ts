/** @format */

import firebase from 'firebase';
import 'firebase/functions';

// Firebase Config Variables
import { API_KEY, APP_ID, AUTH_DOMAIN, DATABASE_URL, MESSAGE_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from '&env';

interface FirebaseConfig {
  appId: string;
  apiKey: string;
  projectId: string;
  authDomain: string;
  databaseURL: string;
  storageBucket: string;
  messagingSenderId: string;
}

const config: FirebaseConfig = {
  appId: APP_ID,
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
export const fns = firebase.functions();

export interface FirebaseError {
  code: string;
}
