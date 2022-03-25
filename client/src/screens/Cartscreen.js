import React from 'react';
import {useSelector , useDispatch} from 'react-redux' //cartscreen

function Cartscreen() {

  const cartstate = useSelector(state=>state.cartReducer)
  const cartItems = cartstate.cartItems


// 18:00

  return (
    <div>
         <div className='row justify-content-center'>
           <div className='col-md-6'>
             <h2 style={{fontSize: '40px'}}>Your Order From SheyPizza</h2>
             {cartItems.map(item=>{
               return <div className='flex-container'>

                      <div>
                        <br></br>
                        <h1>{item.name}[{item.varient}]</h1>
                        <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                        <h1>Quantity : </h1>
                        <i class="fa fa-plus"></i>
                        <b>{item.quantity}</b>
                        <i class="fa fa-minus"></i> 
                      </div>
                      <div>





                      </div>
                      <div>





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