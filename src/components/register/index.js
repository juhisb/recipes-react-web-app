import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerThunk} from "../../services/user-thunk";
import {Navigate, useNavigate} from "react-router";
import {Link} from "react-router-dom";
import "./index.css"

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.userData)
    const [userType, setUserType] = useState('USER')

    const userTypeChange = (event) => {
        setUserType(event.target.value);
    }

    useEffect(() => {
        // redirect user to login page if registration was successful
        if (currentUser) navigate('/')
        console.log(currentUser)
    }, [navigate, currentUser])

    const handleRegistrationBtn = () => {
        if (password !== confirmPassword) {
            setError('Passwords must match!')
            return
        }
        setError(null)
        const newUser =
            {username, firstName, lastName, email, phoneNumber, password, accountType: userType}
        console.log(newUser)
        dispatch(registerThunk(newUser))
        console.log(currentUser)
        if (currentUser) {
            console.log(`Welcome ${currentUser.firstName}!`)
            navigate('/')
        }
    }
    return (
        <>
        <div className="Auth-form-container">

            <div className="Auth-form">
                <div className="Auth-form-content">
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <Link to="../login">Sign In</Link>
                    </div>
                    <div className="form-group mt-2">
                        <label>Username</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Username"
                            onChange={(e) =>setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>First Name</label>
                        <input
                            className="form-control mt-1"
                            placeholder="First Name"
                            onChange={(e) =>setFirstName (e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Last Name</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Last Name"
                            onChange={(e) =>setLastName (e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            onChange={(e) =>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            className="form-control mt-1"
                            placeholder="Phone Number"
                            onChange={(e) =>setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) =>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm Password"
                            onChange={(e) =>setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div >
                        <br/>
                        <span> Sign up as: </span>
                        <input type="radio" onChange={(event) => userTypeChange(event)} className="form-check-input " name="userType" value="USER" defaultChecked></input>
                        <label className="form-check-label ms-1 me-2" htmlFor="userRadio"> User </label>

                        <input type="radio" onChange={(event) => userTypeChange(event)} className="form-check-input " name="userType" value="REVIEWER"></input>
                        <label className="form-check-label ms-1" htmlFor="reviewerRadio"> Reviewer </label>

                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={handleRegistrationBtn}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;