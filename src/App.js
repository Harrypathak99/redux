import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Product from './components/Product';
import Navbar from './components/Navbar';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Dashboard />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
