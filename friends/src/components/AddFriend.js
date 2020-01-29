import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend({friends, setFriends}) {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', newFriend)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={addFriend}>
            <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} value={newFriend.name}/>
            <input type="number" name="age" placeholder="Enter Agee" onChange={handleChange} value={newFriend.age}/>
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={newFriend.email} />
            <button>Add Friend</button>
        </form>
    )

}

export default AddFriend