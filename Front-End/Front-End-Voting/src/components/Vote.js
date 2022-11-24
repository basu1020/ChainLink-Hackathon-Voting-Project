import React, { useEffect, useState } from 'react'
import CandidateOptions from './Vote-CandidateOptions'
const Vote = () => {
    const [verified, setVerified] = useState(false)

    const confirmVoterIDonIPFS = (e) => {
        if (verified == false) {
            setVerified(true)
        }
        else {
            setVerified(false)
        }
        // e.preventDefault()
    }

    const [candidateArray, setCandidateArray] = useState([{ name: "Rahul" }, { name: "Akshay" }, { name: "ModiJi" }])

    return (
        <>
            <div className="base">
                <div className="container">
                    {!verified &&
                        <div>
                            <h1 className='mb-5'>Cast your important vote here</h1>
                            <div className='confirmVoterID'>
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Election Name</label>
                                        <input type="text" class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Voter Id</label>
                                        <input type="number" class="form-control" id="inputPassword4" />
                                    </div>
                                </form>
                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-primary" onClick={() => { confirmVoterIDonIPFS() }}>Verify Voter Id</button>
                                </div>
                            </div>
                        </div>}
                    {verified &&
                        <CandidateOptions candidateArray={candidateArray} verified={verified} setVerified={setVerified} />
                    }
                </div>
            </div>
        </>
    )
}

export default Vote

// make a mapping of electionName => ipfs address. 