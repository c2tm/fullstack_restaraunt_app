import './Order.css';
import OrderList from './OrderList';
import OrderNav from './OrderNav';

function Order(props) {

    const handlePlaceOrderClick = () => {
        let localStorageValue = JSON.parse(localStorage.getItem(`newOrder`))
        console.log(localStorageValue);
        if (localStorageValue === null) {
            localStorage.setItem(`newOrder`, JSON.stringify(props.orderState));
        }   else {
            let newLocalStorageValue = [localStorageValue, props.orderState];
            localStorage.setItem(`newOrder`, JSON.stringify(newLocalStorageValue));
        }
        
        console.log(localStorage.getItem(`newOrder`));
        props.setPageDisplayed(4);
    }

    const subTotalCalc = () => {
        let subtotal = 0;
        for(let i = 0; i < props.orderState.length; i++) {
            subtotal += props.orderState[i].price;
        }
        subtotal = subtotal.toFixed(2);
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
                <OrderList orderState={props.orderState}/>
                <h3>{`$${subTotalCalc()}`}</h3>
                <button type="button" className='place-order-button' onClick={handlePlaceOrderClick}>Place Order</button>
            </div>
        </div>
    )
}

export default Order;