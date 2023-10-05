import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from './images/logo1.png'
import './NavBar.css'

const NavBar = () => {
    return ( 
        <>
        <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo1} alt='logo' className='nav-logo'/>

            </Navbar.Brand>
          <Nav className="nav-auto">
            <Nav.Link className='nav-home' href="/">HOME</Nav.Link>
            <Nav.Link className='nav-booking' href="/bookings">BOOKINGS</Nav.Link>
            <Nav.Link className='nav-add'  href="/add">ADD BOOKING</Nav.Link>
            <hr className='hr-style'/>
          </Nav>
        </Container>
      </Navbar>
      </>
     );
}
 
export default NavBar;