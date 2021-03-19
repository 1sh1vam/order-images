import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Photos from './pages/Photos';
import Cart from "./pages/Cart"
import Favourite from './pages/Favourite';
import React from "react"

function App() {
  console.log(React.version)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Photos /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/favourite"><Favourite /></Route>
      </Switch>
    </div>
  );
}

export default App;
