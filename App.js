import React , { useState , useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";
import UserContext from './context/UserContext';
import Header from './components/Header';
import Signin from './components/Signin';
import firebase from 'firebase' ;
import db from './config/configFirebase'
import Login from './components/Login';
import HomePage from './components/HomePage';
import IndexPage from './components/indexPage/IndexPage';
function App() {
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;
  const [page,setPage] = useState(true) ;
  const [user,setUser] = useState(null) ;
  const[roomId,setRoomId] = useState("") ;
  const[roomState,setRoomState] = useState(false) ;  
  const [input, setInput] = useState("") ;
  const [chatBox, setChatBox] = useState([]) ;
  const sendMessage = () => {
    db.collection(roomId).add({
      username:email,
      message:input ,
      timestamp:firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput("") ;
  } 
  const logout = () => {
    setUser(null) ;
    setRoomId("") ;
    setEmail("") ;
    setInput("") ;
    setPassword("") ;
    setChatBox([]) ;
    setRoomState(false) ;
    return <Redirect to="/Signin"/>

  }
  const generateRoom = () =>{
    try{
      db.collection(roomId).orderBy('timestamp','asc').onSnapshot( snapshot=>{
          setChatBox(
            snapshot.docs.map( (snap)=>({
                message:snap.data().message,
                username : snap.data().username,
                uid : snap.data().username ,
                timestamp:snap.data().timestamp 
              })
            )
          )
      })
    setRoomState(true);
    }
    catch(error){
      alert(error) ;
    }

  }
  const toggler = () => {
    setPage(!page) ;
  }
  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{email , setEmail , password , setPassword , user , setUser , input ,setInput , toggler,sendMessage,chatBox,setChatBox,roomId,setRoomId,generateRoom,roomState,logout}}
        >
          <Header/>
          { page ? <Redirect to="/Signin"/> : <Redirect to="/Login"/> }
          <Switch>
            <Route exact path="/HomePage"  component={HomePage}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/IndexPage" component={IndexPage}/>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
