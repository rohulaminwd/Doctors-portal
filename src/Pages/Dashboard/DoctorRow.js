import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch}) => {
    const {name, email, img, specialty} = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`Doctor: ${name} deleted`);
                refetch();
            }
        })
    }
    return (
        <tr>
            <td className='font-bold'>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{specialty}</td>
            <td>{email}</td>
            <th>
                <button onClick={() => handleDelete(email)} class="btn btn-ghost btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default DoctorRow;