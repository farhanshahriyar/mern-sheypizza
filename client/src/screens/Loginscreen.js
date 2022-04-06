import React from 'react'

export default function Loginscreen() {
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 float-start'>
                <h2 className='text-center' style={{fontSize:'40px'}}>Login Here</h2>
                <div>
                    <input type="text" placeholder="enter your email here" className='form-control'></input>
                    <input type="password" placeholder="enter your password here" className='form-control'></input>
                    <button className='btn mt-3'>LOGIN</button>
                </div>
            </div>
        </div>
    </div>

  )
}
