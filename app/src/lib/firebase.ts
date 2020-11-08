/** @format */

import firebase from 'firebase';
import 'firebase/functions';

import { firebaseConfig } from '../env';

export const Firebase = firebase.initializeApp(firebaseConfig);

export const fns = firebase.functions();
