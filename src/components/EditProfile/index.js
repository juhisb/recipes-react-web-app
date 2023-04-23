import React, {useState} from "react";
import {compose} from "redux";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import HeaderBar from "../Header";

const EditProfile = (editProfile) => {

    let {currentUser} = useSelector(state => state.userData);
    const {currentAdmin} = useSelector(state => state.adminData)
    currentUser = (currentUser == null ? currentAdmin: currentUser);

    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cancelClickHandler = () => {
        const updatedProfile = currentUser;
        dispatch(updateProfileThunk(updatedProfile))
        navigate("/profile")
    }

    const saveClickHandler = () => {
        const updatedProfile = {...currentUser, firstName, lastName, email, phoneNumber}
        dispatch(updateProfileThunk(updatedProfile))
        navigate("/profile")

    }

    return (
        <>

            <div className="row mx-5">
                <div className = "bgimage">
                <div className="col-10 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
                <div className="position-relative">
                    {/*<i*/}
                    {/*    onClick={cancelClickHandler}*/}
                    {/*    className="col-11 fa-solid fa-xmark fa-2x"></i>*/}
                    <img src={('../../images/banner_home.jpeg')} className=" img w-100 "/><br/>
                    <div className="col-3 position-absolute top-50 ms-2">
                        <img className="rounded-circle img-fluid img-thumbnail" src={('../../images/profile_1.jpeg')}
                        />
                    </div>
                </div>

                <div className="mb-4 ">
                    <button
                        onClick={saveClickHandler}
                        className=" my-1 me-0  btn btn-dark col-1 float-end col-4 col-sm-2"> Save
                    </button>

                </div>

                <br/>


                <div className="mt-5 pt-5">
                    <div className="form-floating ">
                        <input
                            onChange={(event) => {
                                setFirstName(event.target.value.split(' ').slice(0, -1).join(' '))
                                setLastName(event.target.value.split(' ').slice(-1).join(' '))
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={`${firstName} ${lastName}`}></input>
                        <label htmlFor="floatingInputGrid">Name</label>
                    </div>
                </div>

                <div className=" mt-2">
                    <div className="form-floating">
                        <input
                            onChange={(event) => {
                                console.log("loc ", event.target.value)
                                setEmail(event.target.value)
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={email}></input>
                        <label htmlFor="floatingInputGrid">Email Id</label>
                    </div>

                </div>

                <div className=" mt-2 mb-5">
                    <div className="form-floating">
                        <input
                            onChange={(event) => {
                                console.log("loc ", event.target.value)
                                setPhoneNumber(event.target.value)
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={phoneNumber}></input>
                        <label htmlFor="floatingInputGrid">Phone Number</label>
                    </div>

                </div>
                </div>
                </div>

            </div>
            </>

            )

            }

export default EditProfile;