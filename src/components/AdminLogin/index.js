import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adminLoginThunk, loginThunk} from "../../services/admin-thunk";
import {useNavigate} from "react-router";
// import HeaderBar from "../Header";

const AdminLogin = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const {currentAdmin} = useSelector(state => state.adminData);
    const navigate = useNavigate()

    useEffect(() => {
        if(currentAdmin) {
            console.log(currentAdmin);
            navigate("/admin")
        }
    },[currentAdmin,navigate])


    const handleLoginBtn = async () => {
        setError(null)
        const adminData = {username, password}
        const adminLoginRes = await dispatch(adminLoginThunk(adminData));
        if (adminLoginRes.error) {
            setError('Invalid username or password!')
        }
    }


    return(
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
                        <h3 className="Auth-form-title">Admin Login</h3>
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
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminLogin;