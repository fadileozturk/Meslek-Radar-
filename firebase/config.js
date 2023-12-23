/*

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCzImFPb2rlqEjdlg_9FkvlOp8VLBUiKg",
  authDomain: "pamuk-968c4.firebaseapp.com",
  projectId: "pamuk-968c4",
  storageBucket: "pamuk-968c4.appspot.com",
  messagingSenderId: "469185640918",
  appId: "1:469185640918:web:8e23951ff6448684a58c77"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore (app);

*/












import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgileri

const firebaseConfig = {
  apiKey: "AIzaSyDatXDi5PP22jXCy6114papXTwuCWRdAwQ",
  authDomain: "meslek-2cd57.firebaseapp.com",
  projectId: "meslek-2cd57",
  storageBucket: "meslek-2cd57.appspot.com",
  messagingSenderId: "553104686225",
  appId: "1:553104686225:web:32c56d21de1941ecaed330"
};

// Firebase uygulamasını başlatma
const app = initializeApp(firebaseConfig);
// Yetkilendirme (authentication) işlemleri için auth nesnesini alma işlemi
export const auth = getAuth(app);

// Veritabanı (firestore) işlemleri için db nesnesinin alınması
export const db = getFirestore(app);



















/*
bu kullandığım kod
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBCzImFPb2rlqEjdlg_9FkvlOp8VLBUiKg",
  authDomain: "pamuk-968c4.firebaseapp.com",
  projectId: "pamuk-968c4",
  storageBucket: "pamuk-968c4.appspot.com",
  messagingSenderId: "469185640918",
  appId: "1:469185640918:web:8e23951ff6448684a58c77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
*/