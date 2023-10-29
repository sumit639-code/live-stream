import React from 'react'
import "@/Style/loading.css"
const loading = () => {
 const style = {
    color:'white'
  }
  return (
    <>
      <div className='main'>
        <span className='load'></span>
      </div>
    </>
  )
}

export default loading