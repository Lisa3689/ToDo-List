import React, { useState } from 'react';
import { Input, Button } from 'antd';
import s from './createTodo.module.scss';

type CreateToDoProps = {
    addTodo: (name: string) => void
}

const CreateToDo = ({ addTodo }: CreateToDoProps) => {
    const [inputValue, setInputValue] = useState('');

    const onAddTodo = () => {
        if (inputValue.length) {
            addTodo(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className={s.item}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Введите название задачи' />
            <Button onClick={onAddTodo} type='primary'>Добавить</Button>
        </div>
    )
}

export default CreateToDo;