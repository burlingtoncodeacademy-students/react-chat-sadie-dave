import React from "react";

export default function Messages(props) {
  let messageArray = props.dataResponse; //Assigning props to a variable for later use

  //sanitizing props for header
  let id = props.id;

  let idFirstLetter = id[0].toUpperCase();

  let restOfId = id.slice(1);

  id = idFirstLetter + restOfId;
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

  //mapping over userBodyArray to generate list item elements for each index, assinging to listItems variable
  const listItems = userBodyArray.map((userBodyArray, index) => {
    return <li key={`userBodyArray-${index}`}>{userBodyArray}</li>;
  });

  return (
    <>
    <div id="propsHeader">
      {/* using id props to generate header based on url params */}
      <h1>Let's Chat About {id}!</h1>
    </div>
    <div id="scrollContainer">
        {/* displaying each list item */}
        <ul id="messages">{listItems}</ul>
    </div>
    </>
  );
}
