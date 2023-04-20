import { Card } from "react-bootstrap";
import { removeReviewThunk } from "../../services/review-thunk.js";
import { useDispatch, useSelector } from "react-redux";
import "../RandomAnimeComponent/index.css"
import APP_URL from "../../constants";
const ReviewItem = (
    {
        rev,
        user
    }) => {

    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(removeReviewThunk(id));
    }
    const { currentUser } = useSelector(state => state.userData);
    const renderIcon = () => <i
        className="bi bi-star"
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);
    return (
        <>
            {rev &&
                <Card className="shadow p-0 mb-5 bg-white rounded">
                    <Card.Body>
                        <div className="row">
                            <div className="col-3">
                                <img className="rounded-circle" height={48} src={`/images/profile.jpg`} />
                            </div>
                            {user ?
                                <div className="col-8 mx-auto">
                                    <a
                                        href={APP_URL.react + '/profile/' + user._id}>
                                        <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                    </a>
                                    <div>{user.username}</div>
                                </div>:null
                            }
                            {
                                (user && currentUser && currentUser._id === user._id) ||(currentUser && currentUser.accountType === 'ADMIN') ?
                                    <i className="bi bi-trash col-1 float-end p-0"
                                       onClick={() => deleteReviewHandler(rev._id)}></i> : null
                            }

                        </div>
                        <hr />
                        <Card.Text>{rev.review}</Card.Text>
                        <div style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {renderIcons(rev.rating)}
                        </div>
                    </Card.Body>
                </Card>
            }
        </>
    );
}

export default ReviewItem;