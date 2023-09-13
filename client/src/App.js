
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useDispatch } from 'react-redux';
import { setUser } from './redux/feature/authSlice';
import AddEditTour from './pages/AddEditTour';

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(()=>{
    dispatch(setUser(user))
  },[])

  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/addTour' element={<AddEditTour/>}/>
      <Route path='/editTour/:id' element={<AddEditTour/>}/>
    </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
