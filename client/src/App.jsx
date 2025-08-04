import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Tournaments from './pages/Tournaments'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome';
import CreateTournament from './pages/CreateTournament'


import Layout from './layouts/layout'

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="settings" element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } />
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="tournaments/create" element={
          <PrivateRoute>
            <CreateTournament />
          </PrivateRoute>
        } />
        <Route path="tournaments" element={<Tournaments />} />
      </Route>
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default App