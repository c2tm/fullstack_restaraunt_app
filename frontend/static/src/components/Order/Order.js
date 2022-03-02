function Order(props) {

    return(
        <div className="order-item">
            <img src={props.item.src} alt="order item"/>
            <h2>{props.item.name}</h2>
            <p>{`$${props.item.price.toFixed(2)}`}</p>
            <button type="button" className="delete-button" onClick={() => props.handleDelete(props.index)}>Delete</button>
        </div> 
    );
}

export default Order;   