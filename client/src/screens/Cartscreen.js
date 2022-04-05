import React from 'react';
import {useSelector , useDispatch} from 'react-redux' //cartscreen
import {addToCart} from '../actions/cartActions'

function Cartscreen() {

  const cartstate = useSelector(state=>state.cartReducer)
  const cartItems = cartstate.cartItems
  const dispatch = useDispatch()


  return (
    <div>
         <div className='row justify-content-center'>
           <div className='col-md-6'>
             <h2 style={{fontSize: '40px'}}>Your Order From SheyPizza</h2>
             {cartItems.map(item=>{
               return <div className='flex-container'>

                      <div className='text-start m-1'>  
                        <br></br>
                        <h1>{item.name}[{item.varient}]</h1>
                        <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                        <h1 style={{display:'inline'}}>Quantity : </h1>
                        <i className="fa fa-plus" onClick={()=>{dispatch(addToCart(item , item.quantity+1 ,item.varient))}}></i>
                        <b>{item.quantity}</b>
                        <i className="fa fa-minus" onClick={()=>{dispatch(addToCart(item , item.quantity-1 ,item.varient))}}></i> 
                        <hr></hr>
                      </div>
                      
                      <div className='m-1 w-50 mt-5'>
                        <img src={item.image} style={{height:'80px' , height:'80px'}}></img>
                      </div>
                      
                      <div>
                      <i className="fa fa-trash mt-5"></i> 
                      </div>
              </div>
             })}

             </div>
           <div className='col-md-4'>
           </div>

         </div>
    </div>
  )
}
export default Cartscreen;