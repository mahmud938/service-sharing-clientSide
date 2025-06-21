import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import userIcon from '../../src/assets/icons/userIcon.png'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

const {user, signOutUser} = use(AuthContext);

const handleSignOut = () => {
     signOutUser()
    .then(() => {
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your are successfully LogOut",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch(err => {
        console.log(err)
    })
}

    const links = <>
   
     <li><NavLink to='/'>Home</NavLink></li>
 <li>
  <ScrollLink
    to="service"
    smooth={true}
    duration={500}
    offset={-70}
   
  >
    Services
  </ScrollLink>
</li>


     {
      user && <>
      <li><NavLink to="/myApplications">My Applications</NavLink></li>
      </>
     }
       <li> 

       <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button  btn-ghost " >Dashboard</div>
  <ul tabIndex={0} className="menu dropdown-content bg-base-200 rounded-box  z-1 mt-4 w-52 p-2 shadow-sm">
            <li><NavLink to='/addJobs'>Add Services</NavLink></li>
            <li><NavLink to='/manage'>Manage Service</NavLink></li>
            <li><NavLink to='/booksService'> Booked-Services</NavLink></li>
            <li><NavLink to='/serviceToDo'>  Service-To-Do</NavLink></li>
  </ul>
</div>
          
      
        </li>
  
    </>
    return (
       <div className="navbar bg-base-300  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm sm:menu-vertical  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Lawyers services</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
  <div> 
    {
        user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> :
        <>
        <NavLink className='btn' to='/register'>Register</NavLink>
        <NavLink className='btn' to='/signIn'>SignIn</NavLink>
        
        </>
    }
  </div>
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="?"
            src={`${user ? user.photoURL :  userIcon}`} />
        </div>
      </div>
  </div>
</div>
    );
};

export default Navbar;