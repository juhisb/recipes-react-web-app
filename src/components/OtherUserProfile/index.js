import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {findUser} from "../../services/user-service";
import {useDispatch, useSelector} from "react-redux";
import {addFollowerThunk, findAllFollowersThunk, unfollowThunk} from "../../services/following-thunk";
import {useNavigate} from "react-router";

import OtherFollowing from "../OtherFollowing";
import {Card, Col, Row} from "react-bootstrap";
import {findOtherAllPinnedRecipeThunk} from "../../services/pinned-recipe-thunk";

const OtherUserProfile = () => {
    const params = useParams();
    const otherUser = params.usid;
    const [user, setUserData] = useState(null);
    const { currentReviewer, pendingList } = useSelector(state => state.reviewer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {currentUser} = useSelector(state => state.userData)
    const {currentAdmin} = useSelector(state => state.adminData)
    const {followingList, followers,loading} = useSelector(state => state.following)
    const [checkFollowingData, setFollowingData] = useState(false);
    const {otherPinnedRecipeList} = useSelector((state) => state.pinnedRecipe)
    currentUser = currentUser == null ? currentAdmin: currentUser;

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findUser(otherUser)
            setUserData(userData);
        };
        dispatch(findOtherAllPinnedRecipeThunk(otherUser))
        getDataFromServer();

    }, [])

    useEffect(() => {

        const checkFollowing = async () => {
            followers.forEach(function (key, value) {


                if (key.followingId === user._id) {
                    setFollowingData(true);
                }

            })

            if (user._id === currentUser._id) {
                navigate("/profile");

            }

        };
        checkFollowing();
    }, [user])


    const addFollowerHandler = () => {
        const userId = currentUser._id;
        const followingId = user._id;
        const follow = {userId, followingId}
        dispatch(addFollowerThunk(follow));
        setFollowingData(true)



    }

    const unFollowHandler = () => {
        const userId = currentUser._id;
        const followingId = user._id;
        const unfollowId = {userId, followingId}
        dispatch(unfollowThunk(unfollowId));
        setFollowingData(false)
    }


    return (


        user ?
            <>

                <div className="row mx-5">
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
                                    <h1 className=" text-secondary">@ {user.username}  </h1>

                                </div>
                                <div className="col-4">


                                    {
                                        !checkFollowingData &&
                                        <button className="btn btn-dark  float-end"
                                                onClick={addFollowerHandler}>
                                            Follow
                                        </button>
                                    }

                                    {
                                        checkFollowingData &&
                                        <button className="btn btn-dark  float-end"
                                                onClick={unFollowHandler}>
                                            Unfollow
                                        </button>
                                    }


                                </div>


                            </div>


                            <div className="m-3 text-secondary">
                                <h4 className="title"> Name : {user.firstName} {user.lastName}</h4>
                                <h4 className="title"> Account Type : {user.accountType} </h4>
                            </div>

                        </div>

                        <h3><p className="title mt-5 pt-5"> Recipes They Liked </p></h3>
                        <div>
                            <Row className="mt-5 justify-content-center align-items-stretch">
                                {otherPinnedRecipeList?.map((recipe) => (
                                    <Col key={recipe.recipeId} xs={12} md={4} lg={3} sm={6}>
                                        <Card className="shadow p-0 mb-5 bg-white rounded">
                                            <Card.Img src={recipe.recipeImage} />
                                            <Card.Body>
                                                <Link to={'/detail/' + recipe.recipeId}  className="stretched-link" >
                                                    <Card.Title>{recipe.recipeTitle}</Card.Title>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>


                    </div>

                    <div className="col">
                        <OtherFollowing/>
                    </div>



                </div>
            </> : null

    )


}

export default OtherUserProfile;
