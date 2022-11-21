import React from 'react'

const CreateElection = () => {
    const onClickUpload = () => {
        // write function that will convert Voter ID + Photo ID into a SHA256 hash 
        // upload it on ipfs and return the ipfs UID. 
    }

    return (
        // form - Election Name
        // json file chooser - choosing area
        // an upload button 
        // warning area for Link sending
        <>
            <div className="base">
                <div className="container">
                    <h1 className='mb-5'>Create a New Election</h1>
                    <form action="" className='row g-3'>
                        <div className="col-md-12">
                            <label htmlFor="inputElectionName" className='form-label'>Election Name</label>
                            <input type="text" className='form-control' id="inputElectionName" placeholder='Election Name' />
                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label"> Upload JSON file containing Voter Ids</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                        <button className='btn btn-primary'>
                            
                            Upload
                        </button>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Please Note!</h4>
                            <p>You must send 0.1 LINK * the number of Voter IDs in JSON file as Chainlink Protocol requires 0.1 LINK every time it checks an external API</p>
                            <p class="mb-0">Address of Contract - "0xlafjaljflajflajflaj"</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateElection