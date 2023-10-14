import React from 'react'

function Register(props) {
    let btnStyle;
    btnStyle={
      backgroundColor:"green",
      color:"white",
    }

    let btnText,passBoxType;
    if(props.showPass===true){
        btnStyle.backgroundColor="red";
        btnText="Hide Password";
        passBoxType="text";
    }else{
        btnText="Show Password";
        passBoxType="password";
    }

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
                <input type={passBoxType} name='password' className='form-control' required></input>
            </div><br></br>
            <button type='submit' className='btn btn-primary m-1'>Register</button>
            <button type='button' className="btn m-1" onClick={props.click} style={btnStyle}>{btnText}</button>
        </form>
    </div>
  )
}

export default Register