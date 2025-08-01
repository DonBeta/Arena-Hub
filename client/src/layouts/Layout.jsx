import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout