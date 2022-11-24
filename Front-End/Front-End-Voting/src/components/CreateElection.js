import React, { useState } from 'react'

const CreateElection = () => {
    const [candidateArray, setcandidateArray] = useState(["NOTA"])
    const [CandidateVal, setCandidateVal] = useState("")
    const addCandidate = () => {
        CandidateVal && !candidateArray.includes(CandidateVal) &&setcandidateArray([...candidateArray, CandidateVal])
    }

    const onClickRemove = (val) => {
        setcandidateArray(candidateArray.filter((item) => {
            return item !== val
        }))
    }

    const onClickUpload = () => {
        // 
        // write function that will convert Voter ID + Photo ID given in JSON file into a SHA256 hash 
        // upload it on ipfs and return the ipfs UID. 
    }

    const onChangeCandidate = (e) => {
        setCandidateVal(e.target.value)
    }

    return (
        
        <>
            <div className="base">
                <div className="container">
                    <h1 className='mb-5 mt-5'>Create a New Election</h1>
                    <div action="" className='row g-3'>
                        <div className="col-md-12">
                            <label htmlFor="inputElectionName" className='form-label'>Election Name</label>
                            <input type="text" className='form-control' id="inputElectionName" placeholder='Election Name' />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="formFile" class="form-label"> Upload JSON file containing Voter Ids</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                        <button className='btn btn-primary'>
                            Upload
                        </button>

                        <div className="mb-3">
                            <label className='form-label'>
                                Enter Candidates
                            </label>
                            <div className="d-flex">

                                <input type="text" className='form-control' value={CandidateVal} onChange={onChangeCandidate}/>

                                <button className='btn btn-primary ms-1' onClick={() => {addCandidate()}}> Add </button>
                            </div>
                        </div>
                        
                        <p>Candidates</p>
                        <div className="Candidates-Dispay row">
                            {candidateArray.map(element => {
                                return (<div className='d-flex flex-row' key={element}>
                                    <div className="m-1 w-75 p -3 ">
                                        {element}
                                    </div>
                                    <button className='btn btn-primary m-1' onClick={() => {onClickRemove(element)}}>
                                        Remove
                                    </button>
                        </div>
                                )
                            })}
                        </div>
                        <button className='btn btn-primary'>
                            Create Election
                        </button>
                    
                        <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">Please Note!</h4>
                            <p>You must send 0.1 LINK for each Voted ID </p>
                            <p>Let's say there are 1000 different Voter IDs so you will be asked to provide 1000 * 0.1 = 100 LINK tokens to efficiently complete the elections </p>
                            <p>Why ?</p>
                            <p>Link Protocol uses 0.1 LINK tokens to fetch data from external API</p>
                            <p class="mb-0">Address of Contract - "0x258Af4f648515C3928Bf6c9496B676b1629BcFE4"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateElection

// form - Election Name
        // json file chooser - choosing area
        // an upload button 
        // warning area for Link sending