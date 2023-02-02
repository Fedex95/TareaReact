//import logo from './logo.svg';
import './App.css';
import Universidad from "./componentes/sisa";
import { datos } from './componentes/asignaturas'
import { useState } from 'react';
import TareaAdd from './componentes/TareaAdd';
function App() {
  const [data, setData] = useState(datos);

  const eliminarClick = (item) => {
    console.log("eliminando tarea", item.asignatura);
    if (window.confirm("¿Está seguro de borrar esta asignatura?")) {
      const nuevaLista = data.filter(asignatura => {
        return asignatura.asignatura !== item.asignatura
      })
      console.log("Nueva lista: ", nuevaLista);
      setData(nuevaLista);
    };
  }
  const guardarClase = (clase)=>{
      console.log("Esta es la nueva clase", clase);
      setData([...data, clase]);
  }
  return (
    
      <div className="fondo">
        <div className= 'row'>
        <div className= 'col-2'>
              <TareaAdd guardarClase={guardarClase}/>
        </div>
        <div className= 'col-10'>
        <Universidad datos={data} eliminarClick={eliminarClick} />
          </div>
           </div>
    </div>
  );
}

export default App;
