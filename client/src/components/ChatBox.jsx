import React from 'react'
import {useState}from 'react'
import {useParams} from 'react-router-dom'

export default function ChatBox () {
    const {id} = useParams()

//useEffect to rerender chatbox based on URL (What page they're on)

//useEffect to trigger get 

//     // //creating useStates for each form input
    const [when, setWhen] = useState("")
    const [user, setUser] = useState("")
    const [room, setRoom] = useState("")
    const [body, setBody] = useState("")
//     const [messages, setMessages] = useState([])

//     // //fetching data each time url param (id) changes
//     // useEffect(() => {gettingData()}, [id])

//     // //function to fetch data depending on url param (id)
//     // async function gettingData() {
//     //     const response = await fetch(`http://localhost/8000/${id}`)
//     //     setMessages(await response.json())
//     // }

function handleSubmit(e){
    e.preventDefault();
    console.log(when)
    console.log(user)
    console.log(room)
    console.log(body)
    ///SET INPUT FIELDS BACK TO EMPTY STRINGS
}
    

//     //post fetch function


    return(
        <main>
            <h1>ChatBox</h1>
            <h2>{when}</h2>
            <h2>{user}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='user'
                    type='text'
                    value={user}
                    placeholder='Enter your username'
                    onChange={(e) =>{
                            setUser(e.target.value);
                            setWhen(new Date());
                            setRoom({id});
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