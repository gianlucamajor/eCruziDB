import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaHome } from 'react-icons/fa';

type MenuProps = {
  setStepsEnabled: (enabled: boolean) => void;
};

const Menu = ({ setStepsEnabled}: MenuProps) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            <FaHome size={20} title="Home" />
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={e => {
              e.preventDefault();
              setStepsEnabled(true);
            }}
          >
            Start Tour
          </Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/downloads">Downloads</Nav.Link>          
          {/* <Nav.Link as={Link} to="/methodology">Methodology</Nav.Link>
          <Nav.Link as={Link} to="/metrics">Metrics</Nav.Link>
          <Nav.Link as={Link} to="/release">Release</Nav.Link>
          <Nav.Link as={Link} to="/team">Team</Nav.Link>
          <Nav.Link as={Link} to="/funding">Funding</Nav.Link>
          <Nav.Link as={Link} to="/help">Help</Nav.Link>  */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Menu;