import React , {useContext} from 'react' ;

import img from '../images/icon.jpg' ;
import UserContext from '../context/UserContext';
const Header = () => {
    const context = useContext(UserContext) ;
    const username = () =>{
        const username = context.email.split["@"] ;
        return(
            <div>
                {username[0]}
                {console.log(username)}
            </div>
        )
    }
    return( 
        <div className="header">
            <div className="header-logo">
                <img src={img} height={80} alt=""/>
            </div>
            <div className="header-title">
                { !context.user ? (<h2>Web-Messenger🔥🔥👩🏾‍🤝‍🧑🏼👩🏾‍🤝‍🧑🏼</h2>) : (<div><h2>Hai { context.email.split("@")[0] }🔥🔥</h2><p onClick={context.logout}>click to Logout</p></div>)}
            </div>
        </div>
    )
}
export default Header ;