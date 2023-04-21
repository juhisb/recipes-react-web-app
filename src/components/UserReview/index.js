import React, { useEffect, useState } from "react";
import ReviewItem
    from "./review-item.js";
import { findAllReviewsByUserThunk }
    from "../../services/review-thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
// import "../RandomAnimeComponent/index.css"

const ReviewList = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.userData);
    const {currentAdmin} = useSelector((state) => state.adminData)
    const { reviewList } = useSelector(state => state.review);
    useEffect(() => {
        dispatch(findAllReviewsByUserThunk(currentUser == null ? currentAdmin._id: currentUser._id))
        console.log('review it', reviewList)
    }, [])

    return (
        <><div>
            {reviewList &&
                <Row className="mt-5 justify-content-center align-items-stretch">
                    {reviewList.map(item => (
                        <Col xs={12} md={4} lg={3} sm={6}>
                            <ReviewItem key={item._id} rev={item} />
                        </Col>
                    ))}
                </Row>
            }
            {
                reviewList.length == 0 &&
                <p>Nothing Reviewed!!</p>
            }
        </div></>
    );
};
export default ReviewList;