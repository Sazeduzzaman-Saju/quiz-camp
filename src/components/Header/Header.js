import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo/logo.png'

function Header() {
    return (
        <>
            <div>
                <p className='p-2 m-0 text-center text-white top-tool text-uppercase'>Test Your Skill With us with quiz camp</p>
            </div>
            <div className='header'>
                <div className=''>
                    <Navbar bg="light" expand="lg" className='shadow-lg' >
                        <Container className="">
                            <Link to={"/"}><Navbar.Brand >
                                <img src={logo} alt="" />
                            </Navbar.Brand></Link>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="mx-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <NavLink to="home">Home</NavLink>
                                    <NavLink to="topics">Topics</NavLink>
                                    <NavLink to="blog">Blog</NavLink>
                                    <NavLink to="statistic">Statistic</NavLink>
                                </Nav>
                                <div>
                                    <i className="fa-duotone fa-user icon"></i><span className='ms-2'>User</span>
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