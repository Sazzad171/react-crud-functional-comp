import React from 'react'

// all components import
import AllList from "./AllList";
import Form from "./Form";

export default function Home({ input, setInput, list, setList }) {
  return (
    <>
      <Form input={input} setInput={setInput} list={list} setList={setList} />
      <AllList list={list} setList={setList} />
    </>
  )
}
