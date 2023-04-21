import React, {useEffect, useState} from "react";
import {findAllFollowersThunk} from "../../services/following-thunk";
import {useDispatch, useSelector} from "react-redux";
// import OtherFollowingItem from "../OtherFollowing/OtherFollowingItem";
import FollowItemList from "./FollowItem";

const FollowingItem = () => {


    const {currentUser} = useSelector(state => state.userData)
    const {currentAdmin} = useSelector(state => state.adminData)
    const dispatch = useDispatch();

    const {followingList, followers, loading} = useSelector(state => state.following)

    useEffect(() => {
        dispatch(findAllFollowersThunk(currentUser == null ? currentAdmin._id: currentUser._id))

    } , []);

    return (
        <>
            <div className="list-group">


           <div className="list-group-item"><h2> People You Follow </h2></div>


                {
                    followers.map(item =>
                        <FollowItemList
                            key={item._id}
                            follow={item}/>
                    )
                }

            </div>

        </>
    )


}

export default FollowingItem;