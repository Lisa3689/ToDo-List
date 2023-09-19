import React from 'react'
import { Todo } from '../../types/Todo';
import TodoesItem from './TodoesItem/TodoesItem';
import s from './todoes.module.scss';

type TodoesProps = {
    items: Todo[],
    onChangeTodo: (id: string) => void,
    filter: string,
    deleteOneTodo: (id: string) => void
}

const ToDoes = ({ items, onChangeTodo, filter, deleteOneTodo }: TodoesProps) => {
    const filteredTodoes = filter === 'all'
        ? items
        : filter === 'active'
            ? items.filter(item => !item.isDone)
            : items.filter(item => item.isDone)

    if (!filteredTodoes.length) {
        return <h1 className={s.empty}>Нет задач</h1>
    }

    return (
        <div className={s.todoes}>
            {filteredTodoes.map(item => {
                return <TodoesItem onChangeTodo={onChangeTodo} todo={item} key={item.id} deleteOneTodo={deleteOneTodo} />
            })}
        </div>
    )
}

export default ToDoes