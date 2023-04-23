import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {profileThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import Following from "../Following";
import UserReview from "../UserReview";
import PinnedRecipe from "../PinnedRecipe";


const ProfileScreen = () => {
    let {currentUser} = useSelector(state => state.userData)
    const {currentAdmin} = useSelector(state => state.adminData)
    const { currentReviewer, pendingList } = useSelector(state => state.reviewer);
    const [editProfile, setEditProfile] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState();
    currentUser = currentUser == null ? currentAdmin: currentUser;
    const editClickHandler = () => {
        setEditProfile(true);
        navigate("/edit-profile");
    }
    return (
        <>
            <div className="row mx-5">
                <div className="row my-4">
                    <div className="col-11 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for fellow users!"
                            value={input}
                            onInput={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="col float-end  pe-0 me-0">
                        <Link to={`/searchUsers/${input}`}>
                            <button className="btn btn-dark">
                                Search
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="col-9">


                    <div className="position-relative ">
                        <img src={('../../images/banner_home.jpeg')} className=" img w-100 "/><br/>
                        <div className="col-3 position-absolute top-50 ms-2">
                            <img className="rounded-circle img-fluid img-thumbnail"
                                 src={('../../images/profile_1.jpeg')}
                            />
                        </div>
                    </div>
                    <div className="p-2 name">
                        <div className="row">
                            <div className="col-8">
                                <h1 className=" text-secondary">@{currentUser == null? currentAdmin.username: currentUser.username} </h1>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark float-end" onClick={editClickHandler}>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        <div className="m-3 text-secondary">
                            <h4 className="title"> Name : {currentUser == null ? currentAdmin.firstName: currentUser.firstName}
                                {currentUser == null ? currentAdmin.lastName: currentUser.lastName}</h4>
                            <h4 className="title"> Email Id : {currentUser == null ? currentAdmin.email: currentUser.email} </h4>
                            <h4 className="title"> Phone Number : {currentUser == null ? currentAdmin.phoneNumber: currentUser.phoneNumber} </h4>
                            <h4 className="title"> Account Type : {currentUser == null ? currentAdmin.accountType: currentUser.accountType} </h4>
                        </div>

                    </div>
                    <h3><p className="title">Recipes Pinned</p> </h3>
                    <PinnedRecipe/>

                    {
                        currentUser.accountType != "USER" &&
                        <>
                            <h3> <p className="title">Reviews Posted</p></h3>
                            <UserReview/>
                        </>

                    }




                </div>
                <div className="col">
                    <Following/>
                </div>
            </div>

        </>
    );
}
export default ProfileScreen;