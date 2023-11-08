
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Restaurant from './components/restaurant/Restaurant';
import { Component } from 'react';


export default class App extends Component {
  render(){
  return (
    <BrowserRouter >
    <Navbar />
        <Routes>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/restaurant' element={<Restaurant/>}></Route>
        </Routes>
    </BrowserRouter>
  );
  }
}

