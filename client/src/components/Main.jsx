import React from 'react'
import ChatBox from './ChatBox'
import NavLinks from './NavLinks'
import '../App.css'

export default function Main() {
    return(
        <div>
            <h1>Main</h1>
            <NavLinks/>
            <ChatBox/>
        </div>
    )
}

//MAKE IT SO YOU HAVE TO CLICK ON A CHAT ROOM TO BE ABLE TO TYPE INTO TEXT FIELDS