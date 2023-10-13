import React from 'react'

function Greet(props) {
  return (
    <div className='container card p-3 mt-2 register-container text-center'>
         <h3>{props.name}</h3>
        <h3>Thank you for joining us.</h3>
        <h3>Verfication sent to {props.email}</h3>
    </div>
  )
}

export default Greet