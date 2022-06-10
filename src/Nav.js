import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    
    const transitionNav = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() =>{
        window.addEventListener("scroll", transitionNav);
        return() => window.removeEventListener("scroll",transitionNav);
    },[]);

    return(
        <div className = {`nav ${show && "nav_black"}`}>
                <img onClick = {() => history.push('/')}
                     id = "logo" 
                     src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                     alt = "Netflix logo"></img>
        
                <img id = "avatar" 
                      src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                      alt = "Your Avatar"
                      onClick = {() =>{history.push('./profile')}}></img>
        </div>
    )
}

export default Nav;