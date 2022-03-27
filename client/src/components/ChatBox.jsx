import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
// import MessageDisplay from './MessageDisplay'

export default function ChatBox(props) {
  let { id } = useParams();

  //creating useStates for each form input
  const [user, setUser] = useState("");
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState([]);
  // const [initialData, setInitialData] = useState([]) // not necessary

  useEffect(() => {
    let isConnectedToServer = true;

    async function getData() {
      // debugger;
      let response = await fetch(`http://localhost:8001/${id}`);
      // debugger;
      response = await response.json();
      // debugger;
      setMessages(response);
    }
    if (isConnectedToServer) {
      getData();
    }

    // cleanup function to stop getData from running more than needed: https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
    return () => {
      isConnectedToServer = false;
    };
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    let response = await fetch(`http://localhost:8001/${id}`, {
      method: "POST",
      body: JSON.stringify({
        when: new Date(), // doesn't change, so doesn't need to be state
        user,
        body,
        room: id, // doesn't change format from the original props, no need to make as state
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();

    setMessages(data);
  }

  return (
    <main>
      <h1>{messages.room}</h1>
      <Messages dataResponse={messages} id={id} />

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
                setUser(e.target.value);
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
                setBody(e.target.value);
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
