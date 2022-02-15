import './ThankYouPage.css'

function ThankYouPage(props) {

    const handleHomeClick = () => {
        props.setOrderState([])
        props.setPageDisplayed(1)
    }

    const handleOrderAgainClick = () => {
        props.setOrderState([])
        props.setPageDisplayed(2)
    }

    return(
        <div className="thank-you-page">
            <div className='thank-you-page-nav-container'>
                <nav className='thank-you-page-nav'>

                </nav>
            </div>
            <div className='thank-you-page-content-container'>
                <h1>Thank you for your order!</h1>
                <div className='thank-you-page-button-container'>
                    <button type="button" className="home-button thank-you-page-button" onClick={handleHomeClick}>Home</button>
                    <button type="button" className="order-again-button thank-you-page-button" onClick={handleOrderAgainClick}>Order Again</button>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage;