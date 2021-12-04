import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

export default function Form({ input, setInput, list, setList }) {

    // change input value
    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    // submit form (create)
    const onFormSubmit = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            id: uuidv4(), 
            title: input, 
            Completed: false
        }).then(res => {
            setList([...list, res.data]);
        })
        setInput("");
    }

    return (
        <div  className="d-flex">
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" value={input} onChange={onInputChange} placeholder="Input new one..." required />
                <button>Add</button>
            </form>
        </div>
    )
}