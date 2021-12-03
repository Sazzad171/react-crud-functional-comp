import React from 'react';
import { v4 as uuidv4 } from "uuid";

export default function Form({ input, setInput, list, setList }) {

    // change input value
    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    // submit form (create)
    const onFormSubmit = (e) => {
        e.preventDefault();
        setList([...list, { id: uuidv4(), title: input, Completed: false }]);
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
