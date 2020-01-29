import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"
import AddFriend from "./AddFriend"

const Friends = props => {
    const [friends, setFriends] = useState([]);

    useEffect(() =>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>Friends</h1>

            {friends.map( friend => ( 
                <div key={friend.id}>
                    <h3>Name of your friend: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}

            <h2>Add A Friend</h2>
            <AddFriend />
        </div>
    )
}
export default Friends