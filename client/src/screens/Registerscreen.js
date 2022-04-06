import React , { useState , useEffect } from 'react'

export default function RegisterScreen() {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    function register () {

        if (password!=cpassword) {
            alert("password doesn't match")
        }else {
            const user={
                name,
                email,
                password
            }
            console.log(user);
        }
    }



  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-start'>
                <h2 className='text-center m-2' style={{fontSize:'40px'}}>Register Your Info Here</h2>
                <div>
                    <input required type="text" placeholder="enter your user name here" className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                    <input required type="text" placeholder="enter your email here" className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type="password" placeholder="enter your password here" className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <input type="password" placeholder="enter your confirm password here" className='form-control'value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}></input>
                    <button onClick={register} className='btn mt-3'>REGISTER</button>
                </div>
            </div>
        </div>
    </div>
  )
}
