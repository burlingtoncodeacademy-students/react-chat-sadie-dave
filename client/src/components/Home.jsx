import React from 'react'
import NavLinks from './NavLinks'
import '../home.css'
import Banner from './Banner'

export default function ChatBox () {

    return(
        <main>
            
            <div className="container">
            <Banner />
                
                    
                <div className='homeChatBoxContainer'>    
                    
                    <NavLinks />   
                    
                    <div className="homeChatInnerContainer">

                        <div className='homeChatHeader'>    
                            <h3 id="pickRoom">Pick a chat room to start chatting!</h3> 
                        </div>

                        <div className="formDiv">
                            <form>
                                <input
                                    name='user'
                                    type='text'
                                    placeholder='Enter your username'
                                    disabled={true}
                                    >
                                </input>   
                                <input
                                    name='body'
                                    type='text'
                                    placeholder='Type your message..'
                                    disabled={true}>
                                </input>
                                <button type='submit' disabled={true}>Send</button>
                            </form>
                        </div>

                    </div>

                </div>


            </div>
        </main>
    )
    }