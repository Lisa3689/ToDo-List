import React from 'react';
import { Checkbox } from 'antd';
import s from './todoesItem.module.scss';
import { Button } from 'antd';
import { Todo } from '../../../types/Todo';

type TodoesItemProps = {
    todo: Todo,
    onChangeTodo: (id: string) => void,
    deleteOneTodo: (id: string) => void
}

const TodoesItem = ({ todo, onChangeTodo, deleteOneTodo }: TodoesItemProps) => {
    const onCheck = () => {
        onChangeTodo(todo.id)
    }
    return (
        <div className={`${s.item} ${todo.isDone ? s.doneItem : ''}`}>
            <Checkbox onChange={onCheck} checked={todo.isDone} />
            <h3>{todo.name}</h3>
            <Button onClick={() => deleteOneTodo(todo.id)} danger>Удалить</Button>
        </div>
    )
}

export default TodoesItem