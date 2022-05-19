import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li className='mx-2'><NavLink to='/' >Home</NavLink></li>
        <li className='mx-2'><NavLink to='/appointment' >Appointment</NavLink></li>
        <li className='mx-2'><NavLink to='/Review' >Review</NavLink></li>
        <li className='mx-2'><NavLink to='/Contact' >Contact</NavLink></li>
        <li className='mx-2'><NavLink to='/About' >About</NavLink></li>
        {user && <li className='mx-2'><NavLink to='/dashboard' >Dashboard</NavLink></li>}
        <li className='mx-2'>
          {
              user?
              <button onClick={logOut}  className='btn btn-outline'>SignOut</button>
              :
              <NavLink to='/Login' >Login</NavLink>
          }
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;