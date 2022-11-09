import { Nav, Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="pt-4">
      <Container>
        <Navbar.Brand className="logo-navbar">Thoriqwajedi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ms-auto link-navbar">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
