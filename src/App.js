import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './components/layout/navbar/NavBar';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import SingIn from './components/pages/signin/SingIn';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
    
      {!isLogged && (

        <Router>

          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="singin" element={<SingIn/>} />
          </Routes>

        </Router>
        
      )}

      {isLogged && (

        <Router>

          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>

        </Router>

      )}

    </>
  );
}

export default App;
