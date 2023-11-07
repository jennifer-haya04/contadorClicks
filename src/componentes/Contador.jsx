import React from "react";
import '../hojas-estlo/Contador.css'

function Contador({ numeroClics }) {
  return (
    <div className='contador'>
      {numeroClics}
    </div>
  );
}

export default Contador;