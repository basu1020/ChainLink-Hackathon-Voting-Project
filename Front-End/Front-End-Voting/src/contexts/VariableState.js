import React from 'react'
import VariableContext from "./VariableContext";

const VariableState = (props) => {
    
  return (
    <VariableContext.Provider value ={{}}>
        {props.children}
    </VariableContext.Provider>
  )
}

export default VariableState