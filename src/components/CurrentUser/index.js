import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {profileThunk} from "../../services/user-thunk";

const CurrentUser = ({children}) => {
    const [isLoading, setLoading] = useState(true);
    const {currentUser} = useSelector((state) => state.userData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk()).then(
            ()=>{
                setLoading(false)
            }
        )
    },[])
    if (isLoading) {
        return null
    }
    else {
       return (children)
    }

}
export default CurrentUser