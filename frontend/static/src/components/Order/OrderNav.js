function OrderNav(props) {

    const handleBackClick = () => {
        props.setPageDisplayed(2);
    }

    return(
        <ul className="order-page-nav-list">
            <li>
                <div>
                    <button type="button" className="order-page-back-button" onClick={handleBackClick}>
                        Back
                    </button>
                </div>
            </li>  
        </ul>
    )
}

export default OrderNav;