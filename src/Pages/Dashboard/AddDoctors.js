import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: services, isLoading, refetch} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = '290c7a0f169eabc5cf1f1fe286564c38'

    const onSubmit = async data => {
        console.log('data', data);
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                console.log('imgbb', result)
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send data backend
                fetch('http://localhost:5000/doctor', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Doctors successfully added');
                        refetch()
                    }else{
                        toast.error('fail to add a doctor')
                    }
                })
            }
        })
    }

    if(isLoading){
        return <Loading />;
    }
    return (
        <div className='flex justify-center items-center lg:mt-24'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">Add a doctors</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="name" 
                                placeholder="Your Name" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("name", {
                                    required: {
                                    value: true,
                                    message: 'Name is required'  
                                    },
                                    minLength: {
                                    value: 3,
                                    message: 'Must be 3 characters longer'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required: {
                                    value: true,
                                    message: 'Email is required'  
                                    },
                                    pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid email..'
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <select {...register("specialty")} class="select select-bordered mb-5 w-full max-w-xs">
                                {
                                    services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                    >{service.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input 
                                type="file" 
                                className="input input-bordered w-full max-w-xs" 
                                {...register("image", {
                                    required: {
                                    value: true,
                                    message: 'Image is required'  
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full uppercase font-bold max-w-xs' type="submit" value="Add"  />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;