// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract ChainlinkVotingProject is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bool public ongoingElecton;
    uint256[] internal resArray;
    mapping(string => bool) internal electionsHappened;
    mapping(string => mapping(string => uint256)) internal count;
    mapping(string => mapping(string => bool)) internal voted;
    mapping(string => bool) internal electionOver;
    bytes32 private jobId;
    uint256 private fee;
    mapping(bytes32 => string[3]) private storingBytes;
    bytes32 public returnedByte;

    struct VotingStructure {
        string ElectionName;
        string[] candidateList;
        uint256 endtimestamp;
    }

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
        jobId = "c1c5e92880894eb6b27d3cae19670aa3";
        fee = (1 * LINK_DIVISIBILITY) / 10; 
    }

    VotingStructure[] public elections;

    // function to create new elections.
    function createNewElection (
        string memory _electionName,
        string[] memory _candidate,
        uint256 _endtimestmap
    ) public {
        require(electionsHappened[_electionName] != true, "This election already happened");
        require(ongoingElecton != true, "Can't create a new election right now,");
        VotingStructure memory _newVotingStructure = VotingStructure(_electionName, _candidate, _endtimestmap);
        elections.push(_newVotingStructure);
    }

    // chainlink function
    function _checkVoterIdOnIPFS(string memory inputId, string memory _electionName, string memory _candidate) internal returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add("get", "https://ipfs.io/ipfs/QmenK7xAsn55hMHzx3QiHrNGVYwLiLcjc7YHsF2BPRkgWk/test.json");
        req.add("path", inputId);
        bytes32 reqchainlinkInstance = sendChainlinkRequest(req, fee);
        storingBytes[reqchainlinkInstance] = [_electionName, inputId, _candidate];
        return reqchainlinkInstance;
    }

    // Vote function - chainlink function callup + change in vote count.
    function Vote (
        string memory voterId,
        string memory _candidate,
        string memory _electionName
    ) public {
        require(electionOver[_electionName] != true, "election is over");
        require(voted[_electionName][voterId] != true, "already voted");

        // sending request to chainlink.
        voted[_electionName][voterId] = true;      
        _checkVoterIdOnIPFS(voterId, _electionName, _candidate);
    }

    function conclude(string memory _electionName) public returns(uint256[] memory res) {
        res = _conclude(_electionName);
        return res;
    } 

    function _conclude(string memory _electionName) internal returns (uint256[] memory res) {
        resArray = res;
        for (uint256 i = 0; i < elections[elections.length - 1].candidateList.length; i++) {
            resArray.push(count[_electionName][elections[elections.length - 1].candidateList[i]]
            );
            count[_electionName][elections[elections.length - 1].candidateList[i]] = 0;
        }
        electionOver[_electionName] = true;
        return resArray;
    }

    function fulfill(bytes32 _requestId, bool _returnedapproved) public recordChainlinkFulfillment(_requestId) {
        
        // increase a vote when VoterId is found on the IPFS.
        if (_returnedapproved) {
            returnedByte = _requestId;
            string[3] memory refArray = storingBytes[_requestId];
            count[refArray[0]][refArray[2]] += 1;
        }
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(link.transfer(msg.sender, link.balanceOf(address(this))), "Unable to transfer");
    }
}

// learnings - recursive structs are not allowed.
