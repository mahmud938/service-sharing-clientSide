import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser,setUser, updateUser} = use(AuthContext);
    const navigate = useNavigate();
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photourl = form.photourl.value;
        console.log(name,email,password,photourl)


        // create user 

        createUser(email,password)
        .then(result => {
                 Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your are successfully Registered",
              showConfirmButton: false,
              timer: 1500
            });
            const user = result.user;
            console.log(result)
            updateUser({ photoURL: photourl}).then(() => {

              setUser({...user,photoURL: photourl })

              navigate("/")
            })
        })
        .catch(err => {
            console.log(err);
            setUser(user);
        })
    }


    return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
     <Lottie style={{width:'200px'}} animationData={registerLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} >
            <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Enter your Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Enter your Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Enter your Password" />
          <label className="label">Photo URL</label>
          <input name='photourl' type="text" className="input" placeholder="Enter your PhotoURL" />
          <div><h2>Already have an account <Link  className='text-pink-500' to='/signIn'>SignIn</Link> !</h2>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;