import React, { Component } from 'react';
import GoodInCart from '../../common/goodInCart/GoodInCart'
import GoodOptions from '../../common/goodOptions/GoodOptions'
import Stepper from '../../common/stepper/Stepper'
class Cart extends Component {
  state = {  }
  render() { 
    return (  
      <div>
        <GoodInCart />
        <GoodOptions />
        <Stepper />
      </div>
    );
  }
}
 
export default Cart;