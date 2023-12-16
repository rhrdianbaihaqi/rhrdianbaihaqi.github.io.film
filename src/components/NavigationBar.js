import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
             <Container>
                <Navbar.Brand href="/">HAQI FILM</Navbar.Brand>
                <Nav>
                <Nav.Link href="#Trending">TRENDING</Nav.Link>
                <Nav.Link href="#Superhero">SUPER HERO</Nav.Link>
                <Nav.Link href="#Empatsilinder">ROMANCE</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar
