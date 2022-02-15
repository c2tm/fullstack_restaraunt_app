function MenuNav(props) {

    const handleClick = () => {

        let copyArr = props.orderArray.filter(item => item !== null);

        props.setOrderState(copyArr);
        props.setPageDisplayed(3);
    }

    return(
        <ul className="menu-page-nav-list">
            <li>
                <div>
                    <button type="button" className="menu-page-nav-cart-button" onClick={handleClick}>
                        Your Cart
                    </button>
                </div>
            </li>  
        </ul>
    )
}

export default MenuNav;