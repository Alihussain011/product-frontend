import { Navbar, Nav, Container, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return (
        <Navbar>
            <Container className='justify-content-center'>
                <Nav className='gap-5'>
                    <NavItem>
                        <Link to={"/registration"}>
                            <Button variant="light" className='shadow'>SignUp</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to={"/registration/login"}>
                            <Button variant="light" className='shadow' >Login</Button>
                        </Link>
                    </NavItem>
                </Nav>
            </Container>

        </Navbar>
    )
}
