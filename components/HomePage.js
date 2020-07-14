import React , { useContext } from 'react' ;
import InputField from './Messanger/InputField';
import DisplayMessage from './Messanger/DisplayMessage';
import '../HomePageStyle.css'
import UserContext from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
    const context = useContext(UserContext) ;
    if( context.user==null ) return <Redirect to="/Signin"/>
    return (
        <div className="App">
            <DisplayMessage/>
            <InputField/>
         </div>
      );
}

export default HomePage ;