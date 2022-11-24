import React from 'react'

const Conclude = () => {
    return (
        <div className="base">
            <div className="container">
                <h1 className='mb-5'>Conclude the election and see the results.</h1>
                <form className="row g-3">
                    <div className="col-auto">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="text" className="form-control" id="inputPassword2" placeholder="ElectionName" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Conclude Election</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Conclude