import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import signInLottie from '../../assets/lotties/login.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SignIn = () => {
      const {signIn} = use(AuthContext);

      const location = useLocation();
      const navigate = useNavigate();
      console.log('location in sign i page', location)
      const from = location.state || '/';

        
        const handleSignIn = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            
            console.log(email,password)
    
    
            // signIn user 
    
            signIn(email,password)
            .then(result => {
                     Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your are successfully signIn",
                  showConfirmButton: false,
                  timer: 1500
                });
                console.log(result)
                navigate(from)
            })
            .catch(err => {
                console.log(err)
            })
        }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              
             <Lottie style={{width:'200px'}} animationData={signInLottie} loop={true}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
              <div className="card-body">
                <form onSubmit={handleSignIn} >
                    <fieldset className="fieldset">
                  
                  <label className="label">Email</label>
                  <input name='email' type="email" className="input" placeholder="Enter your Email" />
                  <label className="label">Password</label>
                  <input name='password' type="password" className="input" placeholder="Enter your Password" />
             
                  <div><h2>Don't have any account <Link className='text-blue-500' to='/register'>register</Link>?</h2></div>
                  <button className="btn btn-neutral mt-4">Sign In</button>
                </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SignIn;