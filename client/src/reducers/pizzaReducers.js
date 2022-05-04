export const getAllPizzasReducer=(state={pizzas : []} , action)=>{

    switch(action.type){
        case 'GET_PIZZAS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS' : return{
            loading : false,
            pizzas : action.payload
        }
        case 'GET_PIZZAS_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}


//addpizzalogic
export const addPizzaReducer=(state={} , action)=>{

    switch(action.type){
        case 'ADD_PIZZA_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'ADD_PIZZA_SUCCESS' : return{
            loading : false,
            success : true,
        }
        case 'ADD_PIZZA_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }

}