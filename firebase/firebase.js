/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyoV4FeZlnXtbCnBrIGHPgA6WzWs9mBz0",
  authDomain: "expense-tracker-pro-378bb.firebaseapp.com",
  projectId: "expense-tracker-pro-378bb",
  storageBucket: "expense-tracker-pro-378bb.appspot.com",
  messagingSenderId: "692194169609",
  appId: "1:692194169609:web:c50cd4efc2d735a4b479d8",
  measurementId: "G-DGK1VM98GX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();