import React, { useEffect, useState } from 'react'

const CandidateOptions = (props) => {

    const [currentCandidate, setcurrentCandidate] = useState("Please select your candidate")

    const onClickCandidateChange = (val) => {
        setcurrentCandidate(val)
    }

    return (
        <>
            <div className="optionsContainer">
                <h1 style={{ display: "block" }} className="mt-3 mb-3">
                    {currentCandidate}
                </h1>
                {props.candidateArray.map(element => {
                    return <>
                        <button className='btn btn-success me-2' key={element.name} value={element.name} onClick={() => { onClickCandidateChange(element.name) }}>
                            {element.name}
                        </button>
                    </>
                })}
                <button className='btn btn-primary'>Submit Vote</button>
            </div>
        </>
    )
}

export default CandidateOptions