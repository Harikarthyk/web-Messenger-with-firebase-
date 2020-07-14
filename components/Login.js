import React , {useContext} from 'react' ;
import UserContext from '../context/UserContext';
import firebase from 'firebase/app' ;
import { Redirect } from 'react-router-dom';

const Login = () => {
    const context = useContext(UserContext) ;
    const getIn = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(context.email,context.password) 
            .then(result=>
                context.setUser({
                    email : result.user.email ,
                    uid : result.user.uid 
                })
            )
            .catch(error=>{
                    alert(error) ;
                    console.error(error) ;    
                }
            )
    }    
    if( context.user!=null ) {
        return <Redirect to="/IndexPage" />
    }
    return(
        <div className="signin-wrapper">
            <div className="signin-header">
                <h2>Let's Check in..</h2>
            </div>
            <div className="signin-body">
                <input
                    type="text" 
                    placeholder="Enter your Email"
                    value={context.email}
                    onChange={e=>context.setEmail(e.target.value)}
                />
                <input
                    type="text" 
                    placeholder="Enter Password"
                    value={context.password}
                    onChange={e=>context.setPassword(e.target.value)}
                />
                <button onClick={getIn} disabled={!context.email || !context.password} className="btn-submit">
                    Let's Get In
                </button>
            </div>
            <div className="toggle">
                <h3 onClick={context.toggler}>New User</h3>
            </div>
        </div>
    );
}

export default Login ;