import React , { useContext } from 'react' ;
import UserContext from '../../context/UserContext';
const DisplayMessage  = () => {
    const context = useContext(UserContext) ;
    return(
        <div className="messgae-wrapper">
            {
                context.chatBox.map( ( msg , index ) =>{
                    return(
                    <div key={index}className={msg.username===context.email?"user-message-head":"guest-message-head"}>
                        <div key={index}className={msg.username===context.email?"user-message":"guest-message"}><div>{msg.message}</div></div>
                        {msg.username!==context.email ? 
                            ( <div className="msg-username">{msg.username.split("@")[0]}</div>)
                        :(<div></div>)
                        }
                    </div>
                    );
                })
            }
        </div>
    )
}

export default DisplayMessage ;