/** @format */

import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

const MESSAGE_SENDER_ID = '612367329435';
const PROJECT_ID = 'universal-store-bee55';
const STORAGE_BUCKET = 'universal-store-bee55.appspot.com';
const AUTH_DOMAIN = 'universal-store-bee55.firebaseapp.com';
const APP_ID = isIOS ? '1:612367329435:ios:75d773695ca8b04ae1fe3e' : '1:612367329435:android:24ded94e405235e0e1fe3e';
const DATABASE_URL = 'https://universal-store-bee55.firebaseio.com';
const API_KEY = isIOS ? 'AIzaSyAp1sGd4OK1G6_a0g7i_5FMORPZkrav4vo' : 'AIzaSyB7J37wB33M5wSEIy39_0DLR35ebGgQlsg';

export const firebaseConfig = {
  appId: APP_ID,
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
};

export const HASURA_GRAPHQL_ADMIN_SECRET = 'universalstoresecretkey';
export const GRAPHQL_API = 'https://bright-heron-91.hasura.app/v1/graphql';
