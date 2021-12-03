import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1 className="heading">Bazar List</h1>
            <p>
                <Link to="/">Home</Link> &nbsp;
                <Link to="about">About</Link>&nbsp;
                <Link to="contact">Contact</Link>
            </p>
        </div>
    )
}
