import { Card } from "react-bootstrap";
import { removeReviewThunk } from "../../services/review-thunk.js";
import { useDispatch, useSelector } from "react-redux";
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
    const {currentAdmin} = useSelector(state => state.adminData)
    console.log(currentAdmin)
    const renderIcon = () => <i
        className={`bi-star-fill`}
        style={{ fontSize: 20, color: '#f1c40f' }}
    />;

    const renderIcons = num => [...Array(num)].map(renderIcon);
    return (
        <>
            {rev &&
                <Card className="shadow p-0 mb-3 bg-white rounded">
                    <Card.Body>
                        <div className="row">
                            <div className="col-1">
                                <img className="rounded-circle" height={48} src={`../../images/profile_1.jpeg`} />
                            </div>
                            {user ?
                                <div className="col-10">
                                    <div className="ms-2">
                                    <a
                                        href={APP_URL.react + '/profile/' + user._id}>
                                        <div className="fw-bold">{user.firstName} {user.lastName}</div>
                                    </a>
                                    <div>{user.username}</div>
                                    </div>
                                </div>:null
                            }
                            {
                                (user && currentUser && currentUser._id === user._id) ||(currentAdmin) ?
                                    <i className="bi bi-trash col-1 float-end p-0 text-center fs-6"
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