import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddUser(props) {

    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')

    const url = 'http://localhost:4000/user'
    const addUserUrl = 'http://localhost:4000/user/add'

    const getAllUsers = async () => {
        const res = await axios.get(url)
        setUsers(users, res.data)
        console.log(users)
    }

    const onChangeUsername = (event) => {
        setUsername(username, event)
        console.log(username)
    }

    const onSubmit = async (event) => {
        const res = await axios.post(addUserUrl, username)
        console.log(res)
        event.preventDefault();
    }

    useEffect(() => {
        getAllUsers()
        onChangeUsername()
        onSubmit()
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Add user</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group m-2">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username"
                                    onChange={onChangeUsername}
                                />
                            </div>
                            <div className="form-group m-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary">
                                    Save user
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <ul className="list-group">
                    {
                        users.map(user => 
                            <li className="list-group-item list-group-item-action" key={ user._id }> 
                                { user.username } 
                            </li>
                        )
                    }
                </ul>      
            </div>
        </div>
    )
}

