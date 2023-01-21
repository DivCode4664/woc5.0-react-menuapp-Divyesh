import React from 'react'
import Option from './Option'
import './Changetext.css'
import './Style.css'
export default function Frontpage() {
  return (
    <div className='front'>
        <div className='Changetext' style={{position: 'absolute', left: '70%', top: '30%', transform: 'translate(-50%,50%)'}}><h1 className='greetings'>Hola Fuddies!</h1>
        <p className='welcome'>Welcome to Shinestar</p></div>
        {/* <img src={frontpage} alt="" style={{width: "100%", height: "500px", overflow: "hidden"}} /> */}
        <div className="Style" style={{margin: '20px'}}><Option /></div>
    </div>
  )
}

