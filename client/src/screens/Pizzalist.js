import React, { useState , useEffect} from 'react' //5.27 3no vd
import {useSelector, useDispatch} from 'react-redux';
import { getAllPizzas } from "../actions/pizzaActions"
import Error from "../components/Error"
import Filter from "../components/Filter"
import Loading from "../components/Loading"

export default function Pizzalist() {
    const dispatch = useDispatch()

    const pizzasstate = useSelector(state=>state.getAllPizzasReducer)

    const {pizzas , error, loading} = pizzasstate
    useEffect(() => {
    dispatch(getAllPizzas())
  }, []);
  return (
    <div>
        <h2>SheyPizza List</h2>
        {loading && (<Loading></Loading>)}
        {error && (<Error error="something went wrong"></Error>)}

        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {pizzas && pizzas.map()} 
        </table>
    
    </div>
  )
}
