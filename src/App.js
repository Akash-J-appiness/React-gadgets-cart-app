import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home';
import Cart from './Components/Cart';
import Context from './context/Context';

function App() {
  return (
    <BrowserRouter>
    <Context/>
      <Header/>
      <div>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="cart" exact element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
