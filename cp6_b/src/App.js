import React, {Fragment, useState, useRef, useEffect} from "react";
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
    // esta funcion es para manejar el Checkbox
    const toggleTask = (id) => {
        // copia de las tareas
        const newTasks = [...listas];
        //encontrar la tarea seleccionada segun su id
        const task = newTasks.find((task) => task.id === id);
        // si la tarea esta completa lo convierte en no completa y si No esta completa la convierte en completa
        task.completed = !task.completed;
        setListas(newTasks); // Actualizamos el listado de las tareas
    };
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
    //Manejador de eliminar tareas
    const handleClearAll = () =>{
        // se hace una copia de las tareas creadas y
        //se filtra por aquellas que han sido seleccionadas
        const newTasks = listas.filter((task) => !task.completed);
        //setListas setea los elementos
        setListas(newTasks);
    }
    // Pare escuchar y guardar las nuevas tareas
    useEffect (() => {
        localStorage.setItem("listApp.lists", JSON.stringify(listas));

    }, [listas]);
    //Para visualizar aquellas que ya se encuentren creadas
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("listApp.lists"));
        if (storedTasks){
            setListas(storedTasks);
        }
    },[]);
    return (
        //Fragment se utiliza para agrupar varios elementos
        <Fragment>
            <TodoList listas={listas} toggleTask={toggleTask}/>
            <input ref={taskRef} type="text" placeholder="Nueva Tarea"/>
            <button onClick={handleTaskAdd}>Agregar</button>
            <button onClick={handleClearAll}>Eliminar</button>
            <div>
                <p>Te quedan {listas.filter((task) => !task.completed).length} tareas por terminar.</p>
            </div>
        </Fragment>
    );
}