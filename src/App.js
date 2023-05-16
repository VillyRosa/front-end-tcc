import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './components/layout/navbar/NavBar';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import SingIn from './components/pages/signin/SingIn';
import Aside from './components/layout/aside/Aside';

function App() {
  
  const [userAuth, setUserAuth] = useState(false);
  
  return (
    <>
    
      {!userAuth && (

        <Router>

          <Routes>
            <Route exact path="/" element={<Login setLogged={setUserAuth} />} />
            <Route path="singin" element={<SingIn/>} />
          </Routes>

        </Router>
        
      )}

      {userAuth && (

        <Router>

          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>

          <Aside />

        </Router>

      )}

    </>
  );
}

export default App;
