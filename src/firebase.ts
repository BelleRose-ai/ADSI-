/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDo8zvIjnpm1McL8uNhLr3lVeNyTkGPjus",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "adsi-portal.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "adsi-portal",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "adsi-portal.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "640230879681",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:640230879681:web:36720c2a8daab26f06bf40"
};

const app = initializeApp(firebaseConfig);
// Initialize Firestore with the provisioned database ID
const db = getFirestore(app, import.meta.env.VITE_FIRESTORE_DATABASE_ID || "ai-studio-africandigitalsk-e4a3aa04-e13d-4a0e-9929-d683f2c480ba");

export { db, collection, addDoc, query, where, getDocs };
