import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import "./index.css"
// import HeaderBar from "../Header";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.userData)

    useEffect(() => {
        // redirect user to home page if login was successful
        if (currentUser) {
            console.log(currentUser);
            navigate('/')
        }
    }, [navigate, currentUser])

    const handleLoginBtn = async () => {
        setError(null)
        const loginUser = {username, password}
        const loginRes = await dispatch(loginThunk(loginUser));
        if (loginRes.error) {
            setError('Invalid username or password!')
        }
    }

    return (
        <>
            {/*<HeaderBar/>*/}
            <div className="Auth-form-container">
            <div className="Auth-form">

                <div className="Auth-form-content">
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter username"
                            onChange={(e) =>setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) =>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={handleLoginBtn}>
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        New User? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;
