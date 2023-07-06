import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";
import styles from "../../../styles/main.module.css";

function Index() {
  return (
    <Navbar expand="lg" className={styles.mainHeader}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "#FFFFFF", marginLeft: "1%" }}>
          The Leavet Homes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <Container fluid></Container>

          <Form className="d-flex">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/login" title="Login" className={styles.navLink}>
                <AiOutlineLogin size={25} color={"#FFFFFF"} />{" "}
              </Nav.Link>
              <Nav.Link href="/cart" title="Cart" className={styles.navLink}>
                <AiOutlineShoppingCart size={25} color={"#FFFFFF"} />
              </Nav.Link>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;
