import React from "react";
import './Infobar.css'
import closeImg from '../../Images/closeIcon.png'
import onlineImg from '../../Images/onlineIcon.png'

const Infobar = ({room})=> {
    return (
        <div className='infoBar'>
            <div className='leftInfo'>
                <img className='onlineIcon' src={onlineImg} alt='online img'/>
                <h3>{room}</h3>
            </div>
            <div className='rightInfo'>
                <a href='/'><img className='closeIcon' src={closeImg} alt='close img'/></a>
            </div>
        </div>
    )
}

export default Infobar;