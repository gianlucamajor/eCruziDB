import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from 'react-icons/fa';

type MenuProps = {
  setStepsEnabled: (enabled: boolean) => void;
  onDownloadClick: () => void;
};

const Menu = ({ setStepsEnabled, onDownloadClick }: MenuProps) => (
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
          <Nav.Link
            href="#"
            onClick={e => {
              e.preventDefault();
              onDownloadClick();
            }}
          >
            Downloads
          </Nav.Link>
          <NavDropdown title="More" id="nav-dropdown-more">
            <NavDropdown.Item
              href="#"
              onClick={e => {
                e.preventDefault();
                setStepsEnabled(true);
              }}
            >
              Start Tour
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">
              Contact
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Menu;