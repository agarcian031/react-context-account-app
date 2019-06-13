import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react'; 
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import UserProfile from './components/UserProfile'; 


function App() {
  return (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/user/profile" render={() => <UserProfile/>}/>
      </Switch>
    </Container>
  </>
  );
}

export default App;
