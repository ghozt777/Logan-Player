import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h1>404 Page Not Found ....</h1>
            <h1>Go back to Logan Player Home Page</h1>
            <NavLink to="/"><button>back to home</button></NavLink>
        </div>
    )
}
