/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDo8zvIjnpm1McL8uNhLr3lVeNyTkGPjus",
  authDomain: "adsi-portal.firebaseapp.com",
  projectId: "adsi-portal",
  storageBucket: "adsi-portal.firebasestorage.app",
  messagingSenderId: "640230879681",
  appId: "1:640230879681:web:36720c2a8daab26f06bf40"
};

const app = initializeApp(firebaseConfig);
// Initialize Firestore with the provisioned database ID
const db = getFirestore(app, "ai-studio-africandigitalsk-e4a3aa04-e13d-4a0e-9929-d683f2c480ba");

export { db, collection, addDoc, query, where, getDocs };
