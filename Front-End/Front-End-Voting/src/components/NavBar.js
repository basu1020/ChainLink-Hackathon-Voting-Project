import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">New Age Elections</a>
          <form className="d-flex">
            <button className="btn btn-success me-2" type="submit">Cast Vote</button>
            <button className="btn btn-success me-2" type="submit">Create a New Election</button>
            <button className="btn btn-success me-2" type="submit">Conclude an Election</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBar