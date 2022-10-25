import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ProductAll, ProductDetail, Login } from './page/index';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/product' element={<ProductAll />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
