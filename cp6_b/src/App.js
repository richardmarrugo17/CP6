import React, {Fragment, useState, useRef} from "react";
import { v4 as uuidv4} from "uuid";
import { TodoList } from "./components/TodoList";

export function App(){
    //listas: estado
    //setListas: modificador del estado.
    const [listas, setListas] = useState([
        {id:1, task: "Tarea", completed:false},
    ]);
    // Referencia para obtener a la data ingresada y usarla en el handle
    const taskRef = useRef();
    //Metodo para añadir tareas
    const handleTaskAdd = () =>{
        //crear la referencia de la tarea
        const task = taskRef.current.value;
        // si la tarea es vacia no retorna nada (retorna vacio)
        if (task==="") return;
        // En caso de recibir informacion, creamos un nuevo
        // elemento y hacemos cambios sobre el estado
        setListas((prevTasks) =>{
            return[...prevTasks, {id:uuidv4(), task, completed:false}];
        });
        taskRef.current.value = null; // limpiar el input cuando se añade
    };
    return (
        //Fragment se utiliza para agrupar varios elementos
        <Fragment>
            <TodoList listas={listas}/>
            <input ref={taskRef} type="text" placeholder="Nueva Tarea"/>
            <button onClick={handleTaskAdd}>Agregar</button>
            <button>Eliminar</button>
        </Fragment>
    );
}