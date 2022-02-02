import React from "react";

export function TodoItem({lista}) {
    const {id, task, complete} =lista;
    return <li>{task}</li>;
}