import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink
        className={(nav) => (nav.isActive ? 'active nav-item' : 'nav-item')}
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'active nav-item' : 'nav-item')}
        to='/blog'
      >
        Blog
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'active nav-item' : 'nav-item')}
        to='/data'
      >
        Data
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'active nav-item' : 'nav-item')}
        to='/about'
      >
        About
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'active nav-item' : 'nav-item')}
        to='/contact'
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav
