import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
function Wrapper(props) {
  return (
    <>
     <Nav/>
     <div>
        {props.children}
     </div>
    </>
  )
}

export default Wrapper