import React, {useState} from 'react'

const index = () => {
    //get pgaenumber from context
    const buttonDisabled = pageNumber === 1
    const paginate = () => {
        if(pageNumber === 1) return;
        setPageNumber()
    }
  return (
    <div>index</div>
  )
}

export default index