import React, {useState} from 'react'
import {datos} from './asignaturas';
function Universidad() {
    console.log("Lista de Asignaturas");
   const[listadoAsignaturas, setListadoAsignaturas]= useState(datos)
    const eliminarHandler = (item) =>{
      if (window.confirm("¿Está seguro de borrar esta asignatura?")){
      const nuevaLista = listadoAsignaturas.filter(asignatura =>{
        return asignatura.asignatura!==item.asignatura
      })
      console.log("Nueva lista: ", nuevaLista);
      setListadoAsignaturas(nuevaLista);
    };
   }
  return (
    <div>
      <div className='container'>
          <div className='row mt-4'>
            {
              listadoAsignaturas.map((item,index)=>{
                return <div className= "col-md-4"key={index}>
                    <div className= "card mt-4">
                    <div className= "card-header text-center foot colorletra ">
                      <h3>{item.asignatura}</h3>
                    </div>
                    <div className= "card-body text-center carta colorletra">
                    <p>Creditos: {item.creditos}</p>              
                    <p>Parcial 1: {item.parcial1}</p>
                    <p>Parcial 2: {item.parcial2}</p>
                  </div>
                  <div className= "card-footer text-center foot">
                    <mark className= "nrc">NRC: {item.nrc}</mark>
                    <p><button className= "btn btn-primary rtx-color" onClick={()=>eliminarHandler(item)}>Eliminar
                    </button></p>
                  </div>
                  </div>                
                  </div>
              })
            }
          </div>
      </div>
    </div>
  )
}
export default Universidad;