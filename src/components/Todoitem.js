import React from 'react'

const Todoitem = props => {
    const {
        index,
        value,
        delList,
        handleOnClickEdit
    } = props
    
    return (
        <div key={index} className="row-wrapper">
            <span>{value}</span>
            <button onClick={() => handleOnClickEdit(index, value)}>Edit</button> 
            {/* on jquery href="javascript:void(0)" data-index="index" data-value="value" class="handleOnClickEdit" */}
            {/* ()=> ay katumbas ng javascript:void(0) */}
            <button onClick={() => delList(index)}>Delete</button>
        </div>
    )
}

export  default Todoitem