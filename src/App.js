import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Home'
import Contact from './pages/Contact'
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


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
