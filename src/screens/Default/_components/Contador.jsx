import React, { useState, useEffect } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(10);
    
    //const contador =10;
    // reactivo alguie esta esperando
    const  handleContador = () =>{
        setContador(contador+1);
    }
    const  handleContadorReducir = () =>{
        setContador(contador-1);
    }
    //cunado el contador tenga el valor de 15 mostart un alerta
    // esta funcion se ejecuta cuando el componente se haya montado una sola vez
    useEffect(()=>{
         setContador(12);
    },[]);
    // esta funcion se ejecta cuando hay cambiado el valor del contador
    useEffect(()=>{
        if (contador===15){
            alert("es igual 15");
        }
   },[contador]);
 // esta funcionesencial se ejecuta cuando el componente se desmonta
   useEffect(()=>{
    return()=>{
        console.log('el componente se desmonto ....')
    }
   },[])
  return (
    <>
     <h1>Componente Contador</h1>
     <h3>{contador}</h3>
     <div>
        <button onClick={handleContador}  >Aumentar</button>
        <button onClick={handleContadorReducir}  >Reducir</button>
     </div>
    </>
   
  )
}

export default Contador