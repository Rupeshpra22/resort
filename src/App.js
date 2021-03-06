import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Rooms from './Components/Rooms';
import SingleRoom from './Components/SingleRoom/SingleRoom';
import Error from './Components/Error/Error';
import { Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
