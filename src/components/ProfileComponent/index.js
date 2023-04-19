import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {profileThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import HeaderBar from "../Header";
import {Link} from "react-router-dom";
import CurrentUser from "../CurrentUser";
import LikedRecipe from "../LikedRecipe";

const ProfileScreen = () => {

     const [editProfile, setEditProfile] = useState(false);
     const navigate = useNavigate();
     const [input, setInput] = useState();
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
                                                            <h1 className=" text-secondary">@fizzlemj  </h1>
                                                        </div>
                                                        <div className="col-4">
                                                            <button className="btn btn-dark float-end" onClick={editClickHandler}>
                                                                Edit Profile
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="m-3 text-secondary">
                                                        <h4 className="title"> Name : {CurrentUser.firstName} {CurrentUser.lastName}</h4>
                                                        <h4 className="title"> Email Id : aaa@gmail.com </h4>
                                                        <h4 className="title"> Phone Number : 12345678 </h4>
                                                        <h4 className="title"> Account Type : Private </h4>
                                                    </div>

                                                </div>



                            </div>
            </div>

        </>
    );
}
export default ProfileScreen;