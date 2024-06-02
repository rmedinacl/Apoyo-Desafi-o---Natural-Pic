import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { FavoritosContext } from "../context/PhotoContext";

const Navigation = () => {
  const { setView } = useContext(FavoritosContext);

  const handleNavLink = (clickedSection) => {
    setView(clickedSection);
  };
  return (
    <Navbar bg="success">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Link to="/" onClick={() => handleNavLink("Home")}>
              {" "}
              Home{" "}
            </Link>{" "}
            |{" "}
            <Link to="/favoritos" onClick={() => handleNavLink("Favorites")}>
              {" "}
              Favoritos{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
