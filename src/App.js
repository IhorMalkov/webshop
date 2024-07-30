import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About'
import Productslider from "./components/Productslider";

const App = () => {
  return (
      <div>
          <header className="flex items-center justify-between bg-gray-200 mb-[60px] h-[60px] pl-[30px] pr-[30px]">
              <nav className="w-full">
                  <Header/>
              </nav>
          </header>
          <main className="ml-[30px] mr-[30px]">
              <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        </main>
          <footer>
          <Footer/>
        </footer>
      </div>
  );
}

export default App;
