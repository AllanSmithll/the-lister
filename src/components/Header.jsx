import { Navbar, Container } from "react-bootstrap";

import '../styles/Header.css'

const Header = () => {
    return (
        <header id='header-container' className='bg-body-tertiary'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="home" className="header-lister-name">The Lister</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;