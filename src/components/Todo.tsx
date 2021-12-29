import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../stores/hooks'
import { addTodo, deleteTodo } from '../stores/slice/todoSlice'


export default function Todo() {
  const [todo, setTodo] = useState("")

  const todoList = useAppSelector((state) => state.todo.value)
  const dispatch = useAppDispatch()

  const addTodoList = (content: string) => {
    if (!content) {
      alert("追加するリストの入力をしてください。")
      return
    }
    dispatch(addTodo(todo))
  }

  return (
    <>
      <h1>Todo</h1>
      {todoList.map((v, i) =>
        <div key={i}>
          <span>・{v} </span>
          <button
            aria-label="Delete Todo"
            onClick={() => dispatch(deleteTodo(i))}
          >
            delete
          </button>
        </div>
      )}
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button
        aria-label="Increment value"
        onClick={() => addTodoList(todo)}
      >
        add
      </button>
    </>
  );
}
