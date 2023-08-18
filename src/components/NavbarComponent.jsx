import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = (h1) => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">{h1}</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;