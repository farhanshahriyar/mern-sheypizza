import React , {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import {loginUser} from "../actions/userActions";

export default function Loginscreen() {

  const[email, setemail] = useState("");
  const[ password, setpassword] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('currentUser')) {
      window.location.href='/'
    }
  }, [])


  function login (){
    const user = {email,password}
    dispatch(loginUser(user))
  }

 
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-end'>
                <h2 className='text-center' style={{fontSize:'40px'}}>Login Here</h2>
                <div>
                    <input type="text" placeholder="enter your email here" className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type="password" placeholder="enter your password here" className='form-control' 
                    value={password} required onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <button onClick={login} type="submit" className='btn mt-3'>Login</button>        
                </div>
            </div>
        </div>
    </div>

  )
}
