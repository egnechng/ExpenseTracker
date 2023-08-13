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

import { useEffect, useState } from 'react';
import { useAuth } from '../firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, CircularProgress, Container, Dialog, Typography } from '@mui/material';
import { auth } from '../firebase/firebase';
import styles from '../styles/landing.module.scss';

const REDIRECT_PAGE = './dashboard';

// Configure FirebaseUI
const uiConfig = {
  signInFlow: 'popup', // popup instead of redirect
  signInSuccessUrl: REDIRECT_PAGE,
  signInOptions: [
    //Google, Facebook, Twitter, Github, email/password
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ]
};

export default function Home() {
  const router = useRouter();
  const { authUser, isLoading } = useAuth();
  const [login, setLogin] = useState(false);

  //redirect if existing user is still logged on
  useEffect(() =>{
    if (!isLoading && authUser){
      router.push('./dashboard');
    }
  }, [authUser, isLoading])

  return ((isLoading || (!isLoading && !!authUser)) ?
  <CircularProgress color="inherit" sx = {{ marginLeft: '50%', marginTop: '25%' }}/>
  :
    <div>
      <Head>
        <title>Expense Tracker PRO</title>
      </Head>

      <main>
        <Container className={styles.container}>
          <Typography variant="h1">Expense Tracker PRO</Typography>
          <Typography variant="h2">Add, view, edit, and delete expenses</Typography>
          <div className={styles.buttons}>
            <Button variant="contained" color="secondary"
              onClick={() => setLogin(true)}>
              Login / Register
            </Button>
          </div>
          <Dialog open = {login} onClose={() => setLogin(false)}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}></StyledFirebaseAuth>
          </Dialog>
        </Container>
      </main>
    </div>);
}