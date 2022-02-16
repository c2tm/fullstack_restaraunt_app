import { useState, useEffect } from 'react'
import './MenuPage.css'
import MenuNav from './MenuNav'
import MenuFavItems from './MenuFavItems';
import MenuList from './MenuList';

function MenuPage(props) {

    const [menuItems, setMenuItems] = useState(null);

    const handleError = (err) => {
        console.warn(err);
    }

    useEffect(() => {
    
        const getMenuItems = async () => {
        
          const response = await fetch('/api/v1/menu/').catch(handleError);
          if(!response.ok) {
            throw new Error('Network reponse was not OK!')  
          } else {
              const data = await response.json();
              setMenuItems(data);
            }
          }
          getMenuItems();
        }, [])
    
    

    if(!menuItems) {
        return <div>Fetching data...</div>
    }

    return(
        <div className="menu-page-container">
            <div className='menu-page-nav-container nav-container'>
                <nav className="menu-page-nav">
                    <MenuNav orderState={props.orderState} setOrderState={props.setOrderState} orderArray={props.orderArray} setPageDisplayed={props.setPageDisplayed}/>
                </nav>
            </div>
            <div className='full-menu-list-container'>
                <h1>Favorite Items</h1>
                    <div className='menu-favorite-items-container'>
                        <MenuFavItems menuItems={menuItems} orderArray={props.orderArray}/>
                    </div>
                <h1>Menu</h1>
                <MenuList menuItems={menuItems} orderArray={props.orderArray}/>
            </div> 
        </div>
    )
}

export default MenuPage;