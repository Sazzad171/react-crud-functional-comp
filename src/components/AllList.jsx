import axios from 'axios';
import React from 'react'

export default function AllList({ list, setList }) {

    // for delete item (delete)
    const deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
            setList(list.filter((lists) => lists.id !== id));
        });
    }

    // for complete buy (complete)
    const buyComplete = (id) => {
        setList(
            list.map((item) => 
                item.id === id ? {...item, completed: !item.completed} : item
            )
        );
    }

    return (
        <div>
            <ul>
                {
                    list.map((list) => (
                        <li className="mb-3" key={ list.id }>
                            <p className={ list.completed ? 'text-line-through' : '' }>{ list.title }</p>
                            <div className="d-flex">
                                <button onClick={ () => buyComplete(list.id) }>Completed</button>
                                <button onClick={ () => deleteItem(list.id) }>Delete</button>
                                <button>Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
