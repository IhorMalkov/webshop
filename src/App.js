import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About'

const App = () => {
  return (
      <div>
          <header className="mb-[60px] bg-gray-200 h-[60px] flex items-center justify-center">
              <nav className="w-full">
                  <Header/>
              </nav>
          </header>
          <main>
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
