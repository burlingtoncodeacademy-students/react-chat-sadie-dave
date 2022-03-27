import React, { useState, useEffect } from "react";

export default function Messages(props) {
  let messageArray = props.dataResponse;

  //sanitizing props for header
  let id = props.id;

  let idFirstLetter = id[0].toUpperCase();

  let restOfId = id.slice(1);

  id = idFirstLetter + restOfId;

  const [data, setData] = useState("");

  let userBodyArray = [];

  for (let i = 0; i < messageArray.length; i++) {
    //looping through all entries
    let user = messageArray[i].user;
    let body = messageArray[i].body;

    //taking user and body from a single entry and combining them into a string
    let userBody = user + ": " + body;

    //add each instance to userBodyArrray
    userBodyArray.push(userBody);
  }
  // use something like nanoid to generate unique ids

  const listItems = userBodyArray.map((userBodyArray, index) => {

    return <li key={`userBodyArray-${index}`}>{userBodyArray}</li>;
  });

  return (
    <>
    <div id="propsHeader">
      <h1>Let's Chat About {id}!</h1>
    </div>
    <div id="scrollContainer">
        <ul id="messages">{listItems}</ul>
    </div>
    </>
  );
}
