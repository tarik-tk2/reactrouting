
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from "./container/Home/Home"
import Details from './container/Details/Details'
import NotFound from "./container/NotFound/NotFound"

import About from './container/about/About';
import {
  
  Routes,
  Route
} from "react-router-dom";
import Nav from './container/nav/Nav';
import Container from './container/Container/Container';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Nav></Nav>
     <Routes>
       <Route path="/container" element={<Container/>}/>
      <Route path="/" element={<Container/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path= "/about/:id" element={<About/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
     
       

    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
