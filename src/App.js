import React from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Account from "./components/Account";
import Login from './components/Signin.jsx'
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
    <h1 className="text-center text-3xl font-bold">Firebase Auth and Context</h1>
    <AuthContextProvider>  
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
