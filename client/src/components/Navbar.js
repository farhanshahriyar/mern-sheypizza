import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; //cart function 


export default function Navbar() {
  const cartstate = useSelector(state=>state.cartReducer) //cart object
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow-lg p3 mb-5 bg-white rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">SHEY PIZZA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cart {cartstate.cartItems.length}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}
