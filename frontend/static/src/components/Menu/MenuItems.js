function MenuItems({menuItems, orderArray}) {

    const handleClick = (index) => {
        orderArray.push(menuItems[index]);
    }

    const menuItemsHTML = menuItems.map((item, index) => 
        <div className="menu-item" key={index}>
            <img className="menu-img" src={item.src} alt="menu item"/>
               <div>
                   <div className='item-name-price'>
                       <h2>{item.name}</h2>
                       <p>{`$${item.price.toFixed(2)}`}</p>
                   </div>
                   <button type='button' className='item-button' onClick={() => handleClick(index)}>Add To Order</button>
               </div>
        </div>)

    return(menuItemsHTML)
}

export default MenuItems;