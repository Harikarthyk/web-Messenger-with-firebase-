import React , {useContext} from 'react' ;
import UserContext from '../../context/UserContext';
import { Redirect } from 'react-router-dom';
const IndexPage = () => {
    const context = useContext(UserContext) ;
    if( context.user==null ) return <Redirect to="/Signin"/>
    if( context.roomState ) {
        return <Redirect to="/HomePage" />
    }
    return(
        <div className="index-wrapper">
            <input
                type="text" 
                placeholder="Enter RoomId"
                value={context.roomId}
                onChange={e=>context.setRoomId(e.target.value)}
            />
            <button onClick={context.generateRoom} >
                Join Room
                
            </button>
        </div>
    );
}

export default IndexPage ;