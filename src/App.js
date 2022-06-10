import React, { createContext, useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import { auth } from './firebase.js';

const Email = createContext();

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
        setUser(userAuth);
      }
    )
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? <LoginScreen /> :
          (<Email.Provider value={user.email}>
              <Switch>
                <Route exact path='/profile'>
                  <ProfileScreen />
                </Route>
                <Route exact path='/'>
                  <HomeScreen />
                </Route>
              </Switch>
          </Email.Provider>
          )}
      </Router>
    </div>
  );
}

export default App;
export {Email};
