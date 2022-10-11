import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo/logo.svg';

function Header() {
    return (
        <>
            <div>
                <p className='p-2 m-0 bg-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sit.</p>
            </div>
            <div className='header'>
                <div className=''>
                    <Navbar bg="light" expand="lg" className='' >
                        <Container className="">
                            <Navbar.Brand to="/">
                                <img src={logo} alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mx-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink to="home">Home</NavLink>
                                    <NavLink to="product">Product</NavLink>
                                    <NavLink to="about">About</NavLink>
                                    <NavLink to="contact">Contact</NavLink>
                                </Nav>
                                <div>
                                    <i class="fa-duotone fa-user"></i><span className='ms-2'>User</span>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Header;