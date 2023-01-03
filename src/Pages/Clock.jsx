import React, { useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());
    

    setInterval(() => {
         setTime(new Date());
    }, 1000);

    const hora = time.getHours() * 30 ; 
    const minutos = time.getMinutes() * 6;
    const segundos = time.getSeconds() * 6; 
  return (
    <div className="body-clock">
      <div className="clock">
        <div className="hand hour" style={{ transform:`rotate(${hora}deg)`}} data-hour-hand></div>
        <div className="hand minute" style={{ transform:`rotate(${minutos}deg)`}} data-minute-hand></div>       
        <div className="hand second" style={{ transform: `rotate(${segundos}deg)`}} data-second-hand></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>    
  )
}

export default Clock