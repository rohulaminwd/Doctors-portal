import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('fail to make an admin') 
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success('success make an admin')
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Add Amin</button>}</td>
            <td><button class="btn btn-xs">remove</button></td>
        </tr>  
    );
};

export default UsersRow;