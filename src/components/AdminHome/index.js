import React, {useEffect, useState} from "react";
// import AdminHeader from "../AdminHeader";
import {
    deleteReviewer,
    findReviewer,
    getApprovedReviewers,
    getPendingReviewers,
    updateReviewer
} from "../../services/reviewer-service";
import {Button} from "react-bootstrap";
import {findUserId} from "../../services/user-service";
import {useNavigate} from "react-router";
// import HeaderBar from "../Header";
import {useSelector} from "react-redux";

const AdminHomePage = () => {
    const {currentAdmin} = useSelector(state => state.adminData);
    const [pendingList, setPendingList] = useState([]);
    const [approved, setApproved] = useState([])
    const [userId, setUserId] = useState(null)

    const navigate = useNavigate();
    const handleApprove = async (rId) => {
        const details = await findReviewer(rId);

        if (details !== undefined) {
            const updated = {...details, approved: true}
            console.log("u " + updated._id)
            const updateApprove = await updateReviewer(updated)

            const updatedPendingList = pendingList.filter((p) => p._id !== updated._id)
            setPendingList(updatedPendingList)
            console.log("pendingList " + pendingList)

            console.log("approved1 " + approved)
            approved.push(updated)
            setApproved(approved)
            console.log("approved " + approved)

        }

    }

    const handleDecline = async (rId) => {

        const declineReq = await deleteReviewer(rId);
        const updatedPendingList = pendingList.filter((p) => p._id !== rId)
        setPendingList(updatedPendingList)
    }

    const getUserId = async (rId) => {

        const userData = await findUserId(rId)
        console.log("data" + userData._id)
        setUserId(userData._id)
        let path = `/profile/${userData._id}`
        console.log("path " + path)
        navigate(path)
    }

    useEffect(() => {

        const getPendingList = async () => {
            const pendingListResponse = await getPendingReviewers()
            setPendingList(pendingListResponse)
        }

        const getApprovedList = async () => {
            const approvedListResponse = await getApprovedReviewers()
            console.log(approvedListResponse)
            setApproved(approvedListResponse)
        }

        getPendingList();
        getApprovedList();
        console.log(approved)

    }, [])

    return (
        <>
            {/*<HeaderBar/>*/}
            {
                !currentAdmin &&
                <h2 className="ps-5 ms-5">Login as Admin to view this page.</h2>
            }
            {
                currentAdmin &&
                pendingList ?
                    <div className="container">
                        <h2> Reviewers Pending to Approve</h2>
                        <ul>
                            {pendingList.map((item) => (

                                <div key={item._id} className="list-group m-2">
                                    <div className="list-group-item ">
                                        <div className="row">
                                            <div className="col-8">
                                                {item.username}
                                            </div>
                                            <div className="col-2">

                                                <Button
                                                    onClick={() => handleApprove(item._id)}
                                                    className="btn btn-success">
                                                    Approve
                                                </Button>
                                            </div>

                                            <div className="col-2">
                                                <Button
                                                    onClick={() => handleDecline(item._id)}

                                                    className="btn btn-danger">
                                                    Decline
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </ul>

                    </div>


                    : null
            }

            {
                currentAdmin &&
                approved ?
                    <div className="container">

                        <h2> Approved Reviewers </h2>
                        <div className="list-group m-2">
                            {
                                approved.map((item) => (
                                        <div key={item._id} role= "button"
                                            className="list-group m-2">
                                            <div
                                                onClick={async () => {
                                                    await getUserId(item.username)
                                                    console.log("userId " + userId)
                                                }}
                                                className="list-group-item">
                                                @ {item.username}

                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>

                    : null
            }


        </>
    )


}

export default AdminHomePage;