import React from 'react'

function Register(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registation Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' required></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='text' name='email' className='form-control' required></input>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' className='form-control' required></input>
            </div><br></br>
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    </div>
  )
}

export default Register