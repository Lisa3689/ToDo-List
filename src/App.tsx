import React, { useState, useId } from 'react';
import './assets/styles/style.scss';
import { Layout } from 'antd';
import ToDoes from './components/ToDoes/ToDoes';
import FilterToDoes from './components/FilterToDoes/FilterToDoes';
import CreateToDo from './components/CreateToDo/CreateToDo';
import { Todo } from './types/Todo';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todoes, setTodoes] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')

  const addTodo = (todoName: string) => {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      isDone: false
    }

    setTodoes([...todoes, newTodo]);
  }

  const onChangeTodo = (id: string) => {
    setTodoes(todoes.map(item => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return item
    }))
  }

  const onChangeFilter = (filterName: string) => {
    setFilter(filterName);
  }

  const deleteTodoes = () => {
    setTodoes([]);
  }

  const deleteOneTodo = (id: string) => {
    setTodoes(todoes.filter(item => item.id !== id))
  }



  return (
    <div className="App">
      <div className='custom-container'>
        <h1 className='title'>TODOES</h1>
        <CreateToDo addTodo={addTodo} />
        <ToDoes onChangeTodo={onChangeTodo} items={todoes} filter={filter} deleteOneTodo={deleteOneTodo} />
        <FilterToDoes filter={filter} onChangeFilter={onChangeFilter} deleteTodoes={deleteTodoes} todoes={todoes} />
      </div>
    </div>
  );
}

export default App;
