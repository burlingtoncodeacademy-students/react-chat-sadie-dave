import React, { useRef, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function ChatBox () {
    let {id} = useParams()

//     // //creating useStates for each form input
    const [when, setWhen] = useState("")
    const [user, setUser] = useState("")
    const [room, setRoom] = useState("")
    const [body, setBody] = useState("")
    // const [messages, setMessages] = useState([])
    const messageRef = useRef([])

 async function handleSubmit(e){
    e.preventDefault();
    console.log(when)
    console.log(user)
    console.log(room)
    console.log(body)
 
    let response = await fetch(`http://localhost:8001/${id}`, {
        method: "POST",
        body: JSON.stringify({
          when: when,
          user: user,
          body: body,
          room: room
        }),
        headers: {
            "Content-type": "application/json"
        }})
   let data = await response.json()
   messageRef.current = data
   console.log(messageRef.current)
    }



    return(
        <main>
            <h1>ChatBox</h1>
            <h2>{messageRef.user}</h2>
            <h2>{messageRef.body}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='user'
                    type='text'
                    value={user}
                    placeholder='Enter your username'
                    onChange={(e) =>{
                            setUser(e.target.value);
                            setWhen(new Date());
                            setRoom(id);
                    }}>
                </input>   
                <input
                    name='body'
                    type='text'
                    value={body}
                    placeholder='Type your message..'
                    onChange={(e) =>{
                        setBody(e.target.value);
                        }}>
                </input>
                <button type='submit'>Send</button>
            </form>
        </main>
    )
    }