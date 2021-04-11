import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar () {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">Logo</div>
                <NavLink exact
                    activeClassName="nav-link--active"
                    className="nav-link" to="/">
                    首頁
                </NavLink>
                <NavLink
                    activeClassName="nav-link--active"
                    className="nav-link"
                    to="/collection">
                    我的收藏
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar
