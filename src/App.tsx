import './App.css';
import { useContext } from "react";
import {LoginContexts} from 'contexts';

function Page() {
  const { Context, ActionType } = LoginContexts;
  const { state, dispatcher } = useContext(Context);
  
  return <>
      
    {state.page !== 'login' ? <>
    <div className='login-area'>
       { state.renderContent()}
       <div className='sign-up'>
          <p>You have an account?</p>
          <a onClick={()=>dispatcher({type:ActionType.login})}>Log in!</a>
      </div>
      </div>
    </> :
      <><div className='login-area'>
       { state.renderContent()}
      </div></>
    }
      </>
  
  }


function App() {
  const {LoginProvider}=LoginContexts
   return (
     <LoginProvider>
       <div className="App">
        <header className="App-header">
          <Page/>
         </header>
        </div>     
    </LoginProvider>
    );
}

export default App;
