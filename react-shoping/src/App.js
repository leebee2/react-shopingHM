import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ProductAll, ProductDetail, Login } from './page/index';
import PrivateRoute from './route/PrivateRoute';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [authen, setAuthen] = useState(false);

  return (
    <div>
      <Navbar authen={authen} setAuthen={setAuthen} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<PrivateRoute authen={authen} />} />
        <Route path='/login' element={<Login setAuthen={setAuthen} />} />
      </Routes>
    </div>
  );
}

export default App;
