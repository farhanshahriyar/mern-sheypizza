export const addToCart=(pizza , quantity , varient)=>(dispatch , getState)=> {      //cartfunction getState



    var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        varient : varient,
        quantity : quantity ,
        prices : pizza.prices ,
        price : pizza.prices[0][varient]*quantity
    }

    dispatch({type:'ADD_TO_CART', payload :  cartItem})

    const cartItems = getState().cartReducer.cartItems //cartfunction update
    localStorage.setItem('cartItems' , JSON.stringify(cartItems)) //cartfunction update



}