import React from 'react'
import NavList from './components/NavList'
import Button from './components/Button'
import Logo from './assets/logo.png'
import Image from './components/Image'
import Contact from './assets/contact.png'
import Container from './components/Container'

const App = () => {
  return (
    <>
      <Container>
        <ul>
          <NavList design="text-red-500" icon={true} text="Home" />
          <NavList design="text-blue-500" icon={true} text="Pages" />
          <NavList icon={false} text="About Us" />
          <NavList icon={false} text="Services" />
          <NavList icon={false} text="Blog" />
          <NavList icon={false} text="Contact" />
        </ul>
        <Image src={Logo} alt="Logo" />
        <Image className="w-[300px]" src={Contact} alt="Contact" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil dignissimos accusantium ducimus officia aut accusamus fugiat est mollitia, eum cumque dicta. Blanditiis tenetur modi perspiciatis consequatur ex unde, praesentium, iusto dolores rem ullam odit exercitationem dicta eius rerum distinctio earum ab omnis eveniet dignissimos soluta voluptate vitae? Sunt, velit.</p>

      </Container>







    </>
  )
}

export default App