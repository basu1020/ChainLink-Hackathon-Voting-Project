import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">New Age Elections</a>
          <form className="d-flex">
            <Link to="/">
              <button className="btn btn-success me-2" type="submit">Create a New Election</button>
            </Link>
            <Link to="/vote">
              <button className="btn btn-success me-2" type="submit">Cast Vote</button>
            </Link>
            <Link to="/conclude">
              <button className="btn btn-success me-2" type="submit">Conclude an Election</button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBar