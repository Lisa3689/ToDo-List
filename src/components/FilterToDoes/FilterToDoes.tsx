import React from 'react';
import s from './filterTodoes.module.scss';
import { Button } from 'antd';
import { Todo } from '../../types/Todo';

type FilterTodoesProps = {
    filter: string,
    onChangeFilter: (filterName: string) => void,
    deleteTodoes: () => void
    todoes: Todo[]
}

const FilterToDoes = ({ filter, onChangeFilter, deleteTodoes, todoes }: FilterTodoesProps) => {
    const tasksLeft = todoes.filter((item) => {
        return !item.isDone
    }).length

    return (
        <div className={s.items}>
            <div>Осталось {tasksLeft} задачи</div>
            <div className={s.btnsGroup}>
                <Button onClick={() => onChangeFilter('all')} type={filter === 'all' ? 'primary' : 'default'}>Все</Button>
                <Button onClick={() => onChangeFilter('active')} type={filter === 'active' ? 'primary' : 'default'}>Активные</Button>
                <Button onClick={() => onChangeFilter('done')} type={filter === 'done' ? 'primary' : 'default'}>Завершенные</Button>
            </div>
            <Button onClick={deleteTodoes} danger type='primary'>Удалить все</Button>
        </div>
    )
}

export default FilterToDoes