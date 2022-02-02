import React from "react";

export function TodoItem({ lista, toggleTask }) {
    const {id, task, completed} =lista;
    //Manejador del click de las tareas para
    //para llamar la funcion toggleTask de App.js
    const handleTaskClick = () =>{
        toggleTask(id);
    };

    return (
    <li>
        <input type={"checkbox"} checked={completed} onChange={handleTaskClick}/>{task}
    </li>
    );
}