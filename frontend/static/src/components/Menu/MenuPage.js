import { useState } from 'react'
import './MenuPage.css'
import MenuNav from './MenuNav'
import MenuFavItems from './MenuFavItems';
import MenuList from './MenuList';

const MENU_ITEMS = [{
    name: `example1`,
    price: 10.00,
    src: `https://picsum.photos/200/300`,
  },{
    name: `example2`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example3`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example4`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example5`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example6`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example7`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  },{
    name: `example8`,
    price: 10.00,
    src: `https://picsum.photos/200/300`
  }]

// const MENU_ITEMS = ;

function MenuPage(props) {

    const [menuItems, setMenuItems] = useState(MENU_ITEMS);

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