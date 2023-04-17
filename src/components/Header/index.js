import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {logoutThunk, profileThunk} from "../../services/user-thunk";
import {adminLogoutThunk} from "../../services/admin-thunk";
import {useEffect} from "react";

const Header = () => {
    const {currentUser} = useSelector(state => state.userData)
    const {currentAdmin} = useSelector(state => state.adminData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log('logging out');
        dispatch(logoutThunk())
        if (currentAdmin) {
            dispatch(adminLogoutThunk())
        }
        navigate('../')
    }
    console.log(currentUser)
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return (
        <>
            <Navbar expand="lg" bg="light" variant="light" collapseOnSelect>
                <Container>

                        <Navbar.Brand href="/">
                            <img
                                src={"../../../images/logo.png"}
                                className="d-inline-block align-top logo"
                                alt="MealTime"
                            />
                  {/*          <Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
                        </Navbar.Brand>
                    {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                    <Nav>
                        {
                            currentUser &&
                            <>
                                <Nav.Link>Welcome {currentUser.username}</Nav.Link>
                                <Nav.Link onClick={handleLogout} className="nav-link" href="#">Logout</Nav.Link>
                                <Link to="/profile" className="nav-link" href="#">Profile</Link>
                                {
                                    (currentUser?.accountType === 'ADMIN') &&
                                    <Link to="/admin" className="nav-link" href="#">Permissions</Link>
                                }
                            </>
                        }
                        {
                            !currentUser &&
                            <>
                                <Link to="/login" className="nav-link" href="#">Login</Link>
                                <Link to="/register" className="nav-link" href="#">Sign Up</Link>
                                {
                                    !currentAdmin &&
                                    <Link to="/admin/login" className="nav-link" href="#">Admin</Link>
                                }

                            </>
                        }

                    </Nav>
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
        </>
    );
}
export default Header;