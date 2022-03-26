import React from 'react'
import ChatBox from './ChatBox'
import NavLinks from './NavLinks'
import '../App.css'
import Banner from './Banner'

export default function Main(props) {

    
    
    return(
        <div className="pageContainer">
            <Banner />

            <div className='mainContainer'>
            <NavLinks/>
            <ChatBox id={props.id}
            />
            </div>
        </div>
    )
}

//MAKE IT SO YOU HAVE TO CLICK ON A CHAT ROOM TO BE ABLE TO TYPE INTO TEXT FIELDS