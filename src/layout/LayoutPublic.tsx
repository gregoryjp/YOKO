import { Outlet } from 'react-router-dom'
import './LayoutPublic.css'
import logo from '../assets/logoY-degradado.png'
import Footer from '../components/footer/Footer'
import Logo from '../components/logo/Logo'
const LayoutPublic = () => {
  return (
 <div className="container-home">
  <header>
    <Logo />
  </header>

  <main>
    <Outlet />
  </main>

  <Footer />
</div>

    
  )
}

export default LayoutPublic