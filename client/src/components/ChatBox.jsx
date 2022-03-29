import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";

export default function ChatBox(props) {
  let { id } = useParams();

  //creating useStates for each form input
  const [user, setUser] = useState("");
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState([]);
 
//Fetching data based on URL parameters to display messages that correlate with each chat room.
  useEffect(() => {
    let isConnectedToServer = true;
    async function getData() {
      let response = await fetch(`http://localhost:8001/${id}`);
      response = await response.json();
      setMessages(response);
    }
    if (isConnectedToServer) {
      getData();
    }
    // cleanup function to stop getData from running more than needed
    return () => {
      isConnectedToServer = false;
    };
  }, [id]);//useEffect Hook runs each time URL param changes


//Submit handler function - posts form input to server/database on submit
  async function handleSubmit(e) {
    e.preventDefault();

    let response = await fetch(`http://localhost:8001/${id}`, {
      method: "POST",
      body: JSON.stringify({
        //setting states 
        when: new Date(),
        user,
        body,
        room: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    setMessages(data);//setting data returned from server to messages state
  }

  return (
    <main>
      {/* Rendering Messages component and passing messages state as props */}
      <Messages dataResponse={messages} id={id} />

      {/* form for inputting username and chat message. Assigning handleSubmit function to forms onSubmit action*/}
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label>
            User Name:
            <input
              name="user"
              type="text"
              value={user}
              maxlength="150"
              placeholder="Enter your username"
              onChange={(e) => {
                setUser(e.target.value); //setting state on change of input
              }}
            ></input>
          </label>

          <label>
            Message:
            <input
              name="body"
              type="text"
              maxlength="150"
              value={body}
              placeholder="Type your message.."
              onChange={(e) => {
                setBody(e.target.value); // setting state on change of input
              }}
            ></input>
          </label>

          <div className="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </main>
  );
}
