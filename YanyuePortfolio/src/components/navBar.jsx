// NavBar.jsx
import { useEffect, useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
// 关键：引入 react-scroll 的 Link
import { Link } from "react-scroll"

import logo from '../assets/img/joystick.png'
import navicon1 from '../assets/img/github.svg'
import navicon2 from '../assets/img/linkedin.svg'
import navicon3 from '../assets/img/instagram.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={ scrolled ? "scrolled" : "" }>
      <Container>
        {/* 点击LOGO回到 home 区域 */}
        <Navbar.Brand as="span">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // 避免被 fixed navbar 遮挡，可视情况调整
            duration={500}
            onClick={() => onUpdateActiveLink('home')}
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt='logo' 
            style={{ width: '60px', height: 'auto' }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-icon'></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Home */}
            <Nav.Link
              as="span"
              className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => onUpdateActiveLink('home')}
                style={{ cursor: 'pointer' }}
              >
                Home
              </Link>
            </Nav.Link>

            {/* Skills */}
            <Nav.Link
              as="span"
              className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
            >
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => onUpdateActiveLink('skills')}
                style={{ cursor: 'pointer' }}
              >
                Skill
              </Link>
            </Nav.Link>

            {/* Experience */}
            <Nav.Link
              as="span"
              className={activeLink === 'experience' ? 'active-navbar-link' : 'navbar-link'}
            >
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => onUpdateActiveLink('experience')}
                style={{ cursor: 'pointer' }}
              >
                Experience
              </Link>
            </Nav.Link>

            {/* Projects */}
            <Nav.Link
              as="span"
              className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => onUpdateActiveLink('projects')}
                style={{ cursor: 'pointer' }}
              >
                Projects
              </Link>
            </Nav.Link>

            {/* Contact */}
            <Nav.Link
              as="span"
              className={activeLink === 'contact' ? 'active-navbar-link' : 'navbar-link'}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => onUpdateActiveLink('contact')}
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Link>
            </Nav.Link>

            {/* 这里保留 Dropdown 示例，不使用平滑滚动 (可删除或自行改造) */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://github.com/NightmareJump'><img src={navicon1} alt=''/></a>
              <a href='https://www.linkedin.com/in/yanyue-myron-meng-021b5119b/'><img src={navicon2} alt=''/></a>
              <a href='https://www.instagram.com/jumpmy2?igsh=MTJmY2Q4MmJ1b2FqZA%3D%3D&utm_source=qr'><img src={navicon3} alt=''/></a>
            </div>
            <button className='connect' onClick={()=>console.log('connect')}>
              <span>Connect Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
