import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {findByUsername, findUser, searchByUsername} from "../../services/user-service";
import {all} from "axios";
import {ListGroupItem} from "react-bootstrap";
import HeaderBar from "../Header";


const UserSearch = () => {

    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    const param = useParams();
    console.log("param " + param.usid)

    useEffect(() => {
        const getDataFromServer = async () => {
            const userData = await searchByUsername(param.usid)
            setAllUsers(userData);

        }

        getDataFromServer();
        console.log("allUsers " + JSON.stringify(allUsers))

    }, [])

    return (
        <>
            <HeaderBar/>
            <div className="row" >
                <div className="col-8 px-5 mx-5">
                    <div className="px-5 pb-2">
                        <h2 className="text-secondary"> Search Results</h2>
                        <div className="list-group">
                            {
                                allUsers.map((user) => (
                                    <div className="list-group-item ">
                                        <Link
                                            className="text-primary link-danger"
                                            to={`../profile/${user._id}`}>

                                            @ {user.username} ({user.accountType})

                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}

export default UserSearch;