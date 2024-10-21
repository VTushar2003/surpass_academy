import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useGlobalContext } from './Context/Context';
import AddUser from './components/AddUser';
import Dashboard from './components/Dashboard';
import WeeklyChallenge from './components/WeeklyChallenge';

const App = () => {
  const { user, userData } = useGlobalContext();
  debugger;
  return (
    <Router>
      <Routes>
        <Route
          path='/Login'
          element={user ? <Navigate to="/Home" /> : <Login />}
        />
        <Route
          path='/Home'
          element={user ? <Home /> : <Navigate to="/Login" />}
        />
        <Route path='/Adduser' element={user ? <AddUser /> : <Navigate to="/Login" />} />
        <Route path='/Dashboard' element={user ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path='/WeeklyChallenge' element={user ? <WeeklyChallenge /> : <Navigate to="/Login" />} />
        <Route
          path='/'
          element={<Navigate to="/Login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
