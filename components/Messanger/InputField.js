import React , { useContext } from 'react' ;
import UserContext from '../../context/UserContext';

const InputField = () => {
    const context = useContext(UserContext) ;
    return(
        <div className="input-wrapper">
            <input
                type = "text" 
                value = { context.input }
                onChange = { e => context.setInput( e.target.value ) } 
                placeholder = "Enter your message .. " 
            />
            <button  onClick={context.sendMessage} disabled={!context.input} >
                Send Message
            </button>
        </div>
    )
}

export default InputField ;