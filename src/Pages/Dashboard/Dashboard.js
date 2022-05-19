import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    console.log(admin)
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-3xl text-bold text-center text-secondary'>Dashboard</h2>
            <Outlet />
        </div> 
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink to='/dashboard/'>Appointment</NavLink></li>
            <li><NavLink to='/dashboard/myReview'>Review</NavLink></li>
            {admin && <>
                <li><NavLink to='/dashboard/users'>All User</NavLink></li>
                <li><NavLink to='/dashboard/doctors'>Add Doctors</NavLink></li>
                <li><NavLink to='/dashboard/managedoctor'>Manage Doctors</NavLink></li>
            </>}
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;