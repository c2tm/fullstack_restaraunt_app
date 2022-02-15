import { useState } from 'react'

function MenuFavItems(props) {
    
    let favItems = [...props.menuItems];
    favItems.splice(4);

    const handleClick = (index) => {
        props.orderArray.push(props.menuItems[index]);
    }

    const favItemsHTML = favItems.map((item, index) => 
            <div className='ind-menu-fav-item-container'>
                <img className="menu-img" src={item.src} alt="menu item"/>
               
                <div>
                    <div className='item-name-price'>
                        <h2>{item.name}</h2>
                        <p>{`$${item.price.toFixed(2)}`}</p>
                    </div>
                    <button type='button' className='item-button' onClick={() => handleClick(index)}>Add To Order</button>
                </div>

            </div>
        )

    return(favItemsHTML)
}

export default MenuFavItems;