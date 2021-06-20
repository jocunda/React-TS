import './Component.css';
import { useContext } from "react";
import {LoginContexts} from 'contexts';

function Login() {
    const { Context, ActionType } = LoginContexts
    const { dispatcher } = useContext(Context)
        return (
            <>
                <h3>Login Area</h3>
                   <input className='username' type="text" placeholder='E-mail'/>
                   <input className='password' type="text" placeholder='Password'/>
                   <p onClick={()=>dispatcher({type:ActionType.forgot})} className="paraclick">Forgot password?</p>
                   <button>Login</button>
                   <div className='sign-up'>
                       <p>Create New Account?</p>
                       <a onClick={()=>dispatcher({type:ActionType.signup})}>Sign up!</a>
                   </div>
           </>
       );
    }
    


export default Login;



