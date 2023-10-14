import React from 'react'
import Styled from "styled-components";

function Register(props) {
    // let btnStyle;
    // btnStyle={
    //   backgroundColor:"green",
    //   color:"white",
    // }

    let btnClass=["btn","m-1"]
    let btnText,passBoxType;
    if(props.showPass===true){
        // btnStyle.backgroundColor="red";
        btnText="Hide Password";
        passBoxType="text";
        btnClass.push("btn-danger")
    }else{
        btnText="Show Password";
        passBoxType="password";
        btnClass.push("btn-success")
    }

    const StyleButton=Styled.button `
     display:block;
     padding:6px 0px;
     background-color:blue; 
     border:none;
     border-radius:6px;
     color:white;
     width:100%;
     margin-left:3px;
     `;
    
    const StyleRegisterContainer=Styled.div `
     width:400px;
     &:hover {
           box-shadow:0px 0px 5px grey;
     }

     @media (min-width:0px) and (max-width:600px){
        width:300px;
     }

    `

    //*****************create div using styled components***************************
    //  const StyledDiv=Styled.div `
    //  background-color:red;
    //  width:400px;
    //  height:300px;
     
    //  `


  return (
    <StyleRegisterContainer className='container card p-3 mt-2 '>
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
           
            {/* *******************Using style change color************** */}
            {/* <button type='button' className="btn m-1" onClick={props.click} style={btnStyle}>{btnText}</button> */}
           
            {/* *******************Using class change color************** */}
            <button type='button' className={btnClass.join(" ")} onClick={props.click}>{btnText}</button>

            {/* *******************Styled Component************** */}
            <StyleButton type='button'>Login</StyleButton>

        </form>
    </StyleRegisterContainer>
  )
}

export default Register