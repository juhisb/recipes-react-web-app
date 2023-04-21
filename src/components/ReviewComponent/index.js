import React, { useEffect, useState } from "react";
import ReviewItem
    from "./review-item.js";
import { findAllReviewsForRecipeThunk }
    from "../../services/review-thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";


const ReviewList = ({
                        recipeId
                    }) => {
    const dispatch = useDispatch();
    const { reviewList, averageRating } = useSelector(state => state.review);
    useEffect(() => {
        dispatch(findAllReviewsForRecipeThunk(recipeId))
        console.log('review it', reviewList)
    }, [])

    return (
        <><div>
            {reviewList &&
                <Row className="mt-5 justify-content-center align-items-stretch">
                    {reviewList.map(item => (
                        <Col xs={12} md={4} lg={3} sm={6}>
                            <ReviewItem key={item._id} rev={item} user={item.reviewer} />
                        </Col>
                    ))}
                </Row>
            }
        </div></>
    );
};
export default ReviewList;