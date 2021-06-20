import './Component.css';

const Signup = () => {
    return (
        <>
            <h3>Sign Up Area</h3>
            <span className="completename">
                <input className='fname' type="text" placeholder='First Name'/>
                <input className='lname' type="text" placeholder='Last Name'/>
            </span>
            <input className='username' type="text" placeholder='E-mail'/>
            <input className='password' type="text" placeholder='Password'/>
            <input className='cpassword' type="text" placeholder='Confirm Password'/>
            <button>Sign Up</button>
        </>
    );
}

export default Signup;
