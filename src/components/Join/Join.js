import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import './Join.css'

const Join = () => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuter">
            <div className="joinInner">
                <h1 className="header">Join</h1>
                <div><input className="joinInput" placeholder='Name' type='text' onChange={(e)=> setName(e.target.value)}/></div>
                <div><input className="joinInput mt-20" placeholder='Room' type='text' onChange={(e)=> setRoom(e.target.value)}/></div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
                    <button className='button mt-20' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;