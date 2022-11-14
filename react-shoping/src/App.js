import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ProductAll, Login } from './page/index';
import PrivateRoute from './route/PrivateRoute';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const authen = useSelector(state => state.auth.authenFlag);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<PrivateRoute authen={authen} />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
