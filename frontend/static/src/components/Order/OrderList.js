function OrderList(props) {

    const orderListHTML = props.orderState.map(item => 
        <div className="order-item">
            <img src={item.src} alt="order item"/>
            <h2>{item.name}</h2>
            <p>{`$${item.price.toFixed(2)}`}</p>
        </div>    
    )

    return(orderListHTML);
}

export default OrderList;