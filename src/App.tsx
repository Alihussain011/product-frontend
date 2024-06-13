import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import  Login  from './component/Login';
import Home from './component/Home';
import  SignUp  from './component/SignUp';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' >
          <Route index element={<SignUp/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
