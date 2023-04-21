import React, {useEffect} from "react";
import {findUser} from "../../services/user-service";
import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";


const FollowItemList = ({follow}) => {

    const [user, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await findUser(follow.followingId)
            setUserData(userData);
        }
        getDataFromServer();
    }, [])
    return (

        <>{
            user ?
                <div
                    className="list-group-item fw-bold"
                >
                    <Link to={`/profile/${user._id}`}
                          className="text-secondary link-primary">  {user.firstName} {user.lastName} </Link>
                </div> : null
        }


        </>
    )
}


export default FollowItemList