import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import {profileThunk} from "../../services/user-thunk";
import {useNavigate} from "react-router";
import HeaderBar from "../Header";
import {Link} from "react-router-dom";

const ProfileScreen = () => {

    return (
        <div>
            <h2>Welcome to the profile page!</h2>
        </div>
    );
}
export default ProfileScreen;