import React from "react";
import ChatBox from "./ChatBox";
import NavLinks from "./NavLinks";
import "../App.css";
import Banner from "./Banner";

export default function Main(props) {
  return (
    <div className="container">
      <Banner />

      <div className="homeChatBoxContainer">
        <NavLinks />
        <div className="homeChatInnerContainer">
          <ChatBox id={props.id} />
        </div>
      </div>
    </div>
  );
}
