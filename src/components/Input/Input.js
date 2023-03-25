import React from "react";
import './Input.css'

const Input = ({message, setMessage, sendMessage})=> {
    return (
        <form className='form'>
            <input
                className='input' type='text' placeholder='Type Your Message...'
                value={message} onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button className='button' onClick={(e)=> sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;