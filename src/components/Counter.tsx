import React from 'react';
import { useAppSelector, useAppDispatch } from '../stores/hooks'
import { increment, decrement } from '../stores/slice/counterSlice'


export default function Todo() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Counter</h1>
      <button
        aria-label="Increment Counter"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span> {count} </span>
      <button
        aria-label="Decrement Counter"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </>
  );
}
