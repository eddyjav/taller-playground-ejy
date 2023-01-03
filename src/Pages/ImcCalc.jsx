import { useState } from "react";

const ImcCalc = () => {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  

  const m = altura /100;
  const imc = (peso/Math.pow(m,2)).toFixed(2);
  console.log(imc);

  let clasf = "";
  let colort = "";

  if(imc < 18.5){
    clasf="Bajo peso"
    colort='1D90CF'
  }else if(imc >= 18.5 && imc < 24.9  ){
    clasf="Adecuado"
    colort='5AB6E9'
  }else if(imc >= 25 && imc < 29.9  ){
    clasf="Sobrepeso"
    colort='2fa149'
  }else if(imc >= 30 && imc < 34.9  ){
    clasf="Obesidad grado 1"
    colort='f4cc36'
  }else if(imc >= 35 && imc < 39.9  ){
    clasf="Obesidad grado 2"
    colort='f7a616'
  }else if(imc >= 40 ){
    clasf="Obesidad grado 3"
    colort='d3222a'
  }

  // console.log(imc+"-Z"+isNaN(imc)+"NAN");

  return (
    <>
      <div className="card-imc" id="card-imc">
        <div className="main">
          <div className="box">
            <p>Peso: {peso}Kg
            <input
              type="range"
              onChange={(ev) => setPeso(ev.target.value)}
              className="peso"
              min={40}
              max={180}
            />40kg - 180kg</p>
          </div>
            <p>Altura: {altura}cm
            <input
              type="range"
              onChange={(ev) => setAltura(ev.target.value)}
              className="altura"
              min={120}
              max={230}
            />120cm - 230cm</p>
          
        </div>

        <h1 style={!isNaN(imc) ? {display: 'inherit'}:{display: 'none'}} >{imc}</h1>
        <h2 style={{color: `#${colort}`}}>{clasf}</h2>
      </div>
    </>
  )
}

export default ImcCalc