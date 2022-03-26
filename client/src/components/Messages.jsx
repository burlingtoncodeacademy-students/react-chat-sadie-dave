import React, {useState, useEffect} from 'react'

export default function Messages (props) {
   let messageArray = props.dataResponse

    const [data, setData] = useState("");

    // not necessary
    // let id = props.id
    // useEffect(() => {
    //     setData(id)
    // }, [])

   let userBodyArray = [];

   for(let i = 0; i < messageArray.length; i++) {

    //looping through all entries
    let user = messageArray[i].user;
    let body = messageArray[i].body;

    //taking user and body from a single entry and combining them into a string
    let userBody = user + ": " + body;


    //add each instance to userBodyArrray
    userBodyArray.push(userBody)
   }
   // use something like nanoid to generate unique ids
   
   const listItems = userBodyArray.map((userBodyArray, index) => {
       // debugger
      return <li key={`userBodyArray-${index}`}>{userBodyArray}</li>
   });

    return (
        <ul id='messages'>
            {listItems}
        </ul>
    )
}