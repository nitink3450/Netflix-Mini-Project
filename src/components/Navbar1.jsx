// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Example from './PopUp';

function NavScrollExample() {
  //function name 1st letter should be in capital letter
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://pngimg.com/uploads/netflix/small/netflix_PNG17.png"
            height="60px"
            alt=""
          />{" "}
          Netflix-Mini
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Audio Language" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Japanease(Eng Sub)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">English Dub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Example/>
            {/* <Form.Control
              type="search"
              placeholder="Search for Animes"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;