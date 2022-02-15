import MenuItems from "./MenuItems";

function MenuList({menuItems, orderArray}) {
    return(
        <div className="menu-list-container">
            <MenuItems menuItems={menuItems} orderArray={orderArray}/>
        </div>
    )
}

export default MenuList;