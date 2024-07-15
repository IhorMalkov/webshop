import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About'

const App = () => {
  return (
      <div className="flex flex-col min-h-screen overflow-hidden  m-4">
        <header>
          <nav className='flex items-center justify-around mb-10 p-3'> 
          <Header />
        </nav>
        </header>
        <main className='flex flex-grow-1'>
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
