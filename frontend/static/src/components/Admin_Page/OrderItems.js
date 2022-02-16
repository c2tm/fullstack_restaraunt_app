import Cookies from 'js-cookie'
import {useEffect, useState} from 'react'

function OrderItems(props) {

    const {adminOrderItems, setAdminOrderItems, checkboxValue, setCheckboxValue} = props;

    const handleError = (err) => {
        console.warn(err);
    }

    useEffect(() => {

        const getOrderItems = async () => {

          const response = await fetch('/api/v1/menu/orders/').catch(handleError);
          if(!response.ok) {
            throw new Error('Network reponse was not OK!')
          } else {
              const data = await response.json();
              setAdminOrderItems(data)
            }
          }
          getOrderItems();
        }, [])

    const handleClick = (order,index) => {
        
        setCheckboxValue(!checkboxValue);

        let copyItems = adminOrderItems;
        copyItems[index].active = !checkboxValue
        setAdminOrderItems(copyItems);
       
         const editOrder = async () => {
            const options = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    'X-CSRFToken': Cookies.get('csrftoken'),
                },
                body: JSON.stringify(adminOrderItems[index]),
                }
        
                const response = await fetch(`/api/v1/menu/orders/${order.id}`, options).catch(handleError);
        
                if(!response.ok) {
                throw new Error("Network response was not ok");
                }
            }
            editOrder()  
    }

    const handleClickDel = (order, index) => {
        const editOrder = async () => {
            const options = {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    'X-CSRFToken': Cookies.get('csrftoken'),
                },
                body: JSON.stringify(adminOrderItems[index]),
                }
        
                const response = await fetch(`/api/v1/menu/orders/${order.id}`, options).catch(handleError);
        
                if(!response.ok) {
                throw new Error("Network response was not ok");
                }
            }
            editOrder()
        
        document.querySelector(`.admin-order-list-item-${order.id}`).style.display = 'none';

        

    }
    let orderItemsHTML = adminOrderItems.map((order, index)=>
        <li className={`admin-order-list-item admin-order-list-item-${order.id}`}>
            <div className='order-container'>
                <h2>{order.name}</h2>
                <p>{`$${order.subtotal.toFixed(2)}`}</p>
                <div>
                    <p>Active?</p>
                    <input type={`checkbox`} className={`checkbox-${order.id}`} onClick={() => handleClick(order, index)} defaultChecked={checkboxValue}/>
                </div>
                <button type="button" onClick={() => handleClickDel(order, index)}>cancel</button>
            </div>
        </li>
        
    );
    

    return orderItemsHTML
}

export default OrderItems