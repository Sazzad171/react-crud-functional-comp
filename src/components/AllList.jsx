import React from 'react'

export default function AllList({ list, setList }) {
    return (
        <div>
            <ul>
                {
                    list.map((list) => (
                        <li className="mb-3" key={ list.id }>
                            <p>{ list.title }</p>
                            <div className="d-flex">
                                <button>Delete</button>
                                <button>Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
