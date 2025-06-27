// This is the content for firebase-bundle.js
// Firebase App (Core)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// Firebase Authentication
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// Firebase Firestore (Database)
import { getFirestore, doc, collection, onSnapshot, addDoc, updateDoc, deleteDoc, serverTimestamp } from "httpss://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// We are exporting these functions so our other scripts can import them
export {
  initializeApp,
  getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged,
  getFirestore, doc, collection, onSnapshot, addDoc, updateDoc, deleteDoc, serverTimestamp
};
