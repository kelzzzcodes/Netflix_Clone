import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext';
import { Account,Login, Home, Signup } from './pages';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
    <AuthContextProvider>

     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<ProtectedRoute>
        <Account/>
        </ProtectedRoute>}/>
     </Routes>

    </AuthContextProvider>
    </>
  )
}

export default App
