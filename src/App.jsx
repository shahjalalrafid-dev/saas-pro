
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ServicePage from './pages/ServicePage'
import AllPages from './pages/AllPages'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/pages" element={<AllPages />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes here as needed */}
        </Routes>

        <Footer />




      </BrowserRouter>







    </>
  )
}

export default App