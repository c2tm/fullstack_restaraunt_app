import Cookies from "js-cookie";
import { useState } from "react";
import './Order.css';
import Order from './Order';
import OrderNav from './OrderNav';

function OrderView(props) {

    const [forceUpdate, setForceUpdate] = useState(true);

    let orderObj = {
        name: 'Placeholder',
        items: props.orderState,
        subtotal: null,
        active: true,
    }

    const handleError = (err) => {
        console.warn(err);
    }

    const handlePlaceOrderClick = () => {
        
        const addOrder = async () => {
            console.log(orderObj);
            const options = {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  'X-CSRFToken': Cookies.get('csrftoken'),
                },
                body: JSON.stringify(orderObj),
              }
    
              const response = await fetch("/api/v1/menu/orders/", options).catch(handleError);
    
              if(!response.ok) {
                throw new Error("Network response was not ok");
              }
        }

        addOrder()
        
        props.setPageDisplayed(4);
    }

    const handleDelete = index => {
        let copyArr = props.orderState;
        copyArr.splice(index, 1);
        props.setOrderState(copyArr);
        setForceUpdate(!forceUpdate);
    }

    const orderHTML = props.orderState.map((item, index) => 
           <Order item={item} index={index} orderState={props.orderState} setOrderState={props.setOrderState} handleDelete={handleDelete}/>
    )

    const subTotalCalc = () => {
        let subtotal = 0;
        for(let i = 0; i < props.orderState.length; i++) {
            subtotal += props.orderState[i].price;
        }
        subtotal = subtotal.toFixed(2);
        orderObj.subtotal = subtotal
        return subtotal;
    }

    return(
        <div className='order-view-container'>
            <div className='order-nav-container'>
                <nav className='order-nav'>
                    <OrderNav setPageDisplayed={props.setPageDisplayed}/>
                </nav>
            </div>
            <div className='order-list'>
                <h1>Your Order</h1>
                {orderHTML}
                <h3>{`$${subTotalCalc()}`}</h3>
                <button type="button" className='place-order-button' onClick={handlePlaceOrderClick}>Place Order</button>
            </div>
        </div>
    )
}

export default OrderView;