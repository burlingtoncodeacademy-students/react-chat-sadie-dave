import React from "react";
import NavLinks from "./NavLinks";
import Banner from "./Banner";

export default function ChatBox() {
  return (
    <main>
      <div className="container">
        <Banner /> {/* Rendering Banner component */}

        <div className="homeChatBoxContainer">
          <NavLinks /> {/* Rendering NavLinks component */}

          <div className="homeChatInnerContainer">
            <div className="homeChatHeader">
              <h3>Pick A Room & Start Chatting!</h3>
            </div>

            <div className="formDiv">

              {/* Creating "dummy form" that has disabled inputs and send button until you click on a chat room */}
              <form>
                <label>
                  USER NAME:
                  <input
                    name="user"
                    type="text"
                    placeholder="Enter your username"
                    disabled={true}
                  ></input>
                </label>

                <label>
                  MESSAGE:
                  <input
                    name="body"
                    type="text"
                    placeholder="Type your message.."
                    disabled={true}
                  ></input>
                </label>

                <div className="button">
                  <button type="submit" disabled={true}>
                    SEND!
                  </button>
                </div>
              </form>
              {/* ^^^^^^^^^^^^^^^^ dummy form ^^^^^^^^^^^^^^ */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
