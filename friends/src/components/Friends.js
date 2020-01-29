import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Friends = props => {
    const [friends, setFriends] = useState([{name: 'jeff', age: 21, email: 'Blownnns@gmail.com', id: Date.now()}]);

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
        </div>
    )
}
export default Friends