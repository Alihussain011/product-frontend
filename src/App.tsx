import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import  Login  from './component/Login';
import Home from './component/Home';
import  SignUp  from './component/SignUp';
import Layout from './component/Layout/Layout';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/registration' >
          <Route index element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
