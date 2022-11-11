import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo2 from './Images/Counterdexlogo.png';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="xlg">
      <Container>
      <img src={logo2} className="logo" alt="logo" />
        <Link className='NoUnderline' to="/"><h1>RevoTrivia</h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburgerMenu'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="https://counterdex.com/" target="_blank">CounterDex</Nav.Link>
            <Nav.Link href="https://counterdex.com/Calculators.html" target="_blank">Valulator</Nav.Link>
            <Nav.Link href="https://counterdex.com/info.html" target="_blank">Information</Nav.Link>
            <NavDropdown  title="Group Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://discord.com/channels/939520368673165312/939520368673165315" target="_blank">Revo League Discord</NavDropdown.Item>
              <NavDropdown.Item href="https://discord.com/channels/670597253764874270/822022281948823552" target="_blank">
                Revomon Offical Discord
              </NavDropdown.Item>
              <NavDropdown.Item href="https://discord.com/channels/979946785818681355/982743464372482149" target="_blank">House of Clans</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSeURNNRXDJPMX6J8hqad71aKgTNyct283C_RYShfEMClimktw/viewform" target="_blank">
                Monthly Tournaments
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;