import {useState} from 'react'
import OrderItems from "./OrderItems"


function AdminPage(props) {
    const [adminOrderItems, setAdminOrderItems] = useState([])
    const [checkboxValue, setCheckboxValue] = useState(true);

    return (
        <div>
            <button>all orders</button>
            <button>current orders</button>
            <button>past orders</button>
            <ul>
                <OrderItems adminOrderItems={adminOrderItems} setAdminOrderItems={setAdminOrderItems} checkboxValue={checkboxValue} setCheckboxValue={setCheckboxValue}/>
            </ul>
        </div>
    )
} 

export default AdminPage