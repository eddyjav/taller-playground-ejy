import React, { useState } from 'react'

const AgeCalc = () => {
  const [fecha, setFecha] = useState(new Date());

    const [fechaF, setfechaF] = useState({
        anios: "",
        meses:"",
        dias:""
    });

let {anios, meses, dias} = fechaF;


  console.log("FECHA: "+fecha);
  const fechaAct = new Date();
    if(fechaAct - fecha < 0) return;

  const calcularEdad = () =>{
    setfechaF({
        anios: fechaAct.getUTCFullYear() - fecha.getUTCFullYear(),
        meses: fechaAct.getUTCMonth() - fecha.getUTCMonth(),
        dias: fechaAct.getUTCDate() - fecha.getUTCDate()
    });
    //  anios = fechaAct.getUTCFullYear() - fecha.getUTCFullYear();
    //  meses = fechaAct.getUTCMonth() - fecha.getUTCMonth();
    //  dias = fechaAct.getUTCDate() - fecha.getUTCDate();    
    if(dias < 0) {
        meses--;
        dias = 30 + dias;
    }
    if(meses < 0) {
        anios--;
        meses = 12 + meses;
    }   
}

console.log("AÑOS: "+anios+" MESES: "+meses+" DIAS:"+dias);
  return (
    <>
   
    <div className="card" id="card">
      <div className="calendar">
        <input className="fecha" type="date" onChange={(e) => setFecha(new Date(e.target.value))} />
        <button className="boton" onClick={calcularEdad}>Calculate</button>
      </div>
    </div>

      <div className="card-container">
      <div className="card-edad">
      <h2>{anios ? anios : "-"}</h2>
      <p>Years</p>
    </div>
    <div className="card-edad">
      <h2>{meses ? meses : "-"}</h2>
      <p>Months</p>
    </div>
    <div className="card-edad">
      <h2>{dias ? dias : "-"}</h2>
      <p>Days</p>
    </div>

      </div>
    
  </>
  )
}

export default AgeCalc