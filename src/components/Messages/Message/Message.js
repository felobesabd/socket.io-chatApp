import React from "react";
import './Message.css'
import ReactEmoji from 'react-emoji';

const Message = ({ message: {user, text}, name })=> {
    let statusUser = false;

    const trimmedUser = name.trim().toLowerCase()

    if (user === trimmedUser) {
        statusUser = true;
    }


    return (
        statusUser ? (
            <div className='messageContainer justifyEnd'>
                <p className='sendText pr-10'>{trimmedUser}</p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhit'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ): (
            <div className='messageContainer justifyStart'>
                <div className='messageBox backgroundLight'>
                    <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sendText pl-10'>{user}</p>
            </div>
        )
    )
}

export default Message;