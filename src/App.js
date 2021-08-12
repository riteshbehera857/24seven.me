import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Nav from './Components/Nav';
import Home from './Home'
import { createTheme, ThemeProvider } from '@material-ui/core'


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc542"
    }
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    fontSize: 20
  }
})
var firebaseConfig = {
  apiKey: "AIzaSyCdHGcvFuNZHVbn90Gfar8RDGNlrXMbnnA",
  authDomain: "seven-97784.firebaseapp.com",
  projectId: "seven-97784",
  storageBucket: "seven-97784.appspot.com",
  messagingSenderId: "42469925280",
  appId: "1:42469925280:web:b815a25fe93c957880c4c5"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.firestore()

export const user = database.collection('user')


function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Home />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
