import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui/dist/styles.css';


function App( { signOut, user }) {
  return (
    
        <div>
          <h1> Hello from Amplify Full Stack...We now have included Auth!</h1>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      
  
    
  );
}

export default withAuthenticator(App);
