import './LandingPage.css'
import LandingPageNavList from "./LandingPageNavList";

function LandingPage(props) {

    const handleClick = () => {
        props.setPageDisplayed(2);
    }

    return(
        <div className="landing-page">
            <div className='landing-page-nav-container'>
                <nav className="landing-page-nav">
                    <LandingPageNavList />
                </nav>
            </div>
            <div className='landing-page-blurred-container'>
                <h1>Hungry? Order now.</h1>
                <button type="button" className='landing-page-blurred-container-button' onClick={handleClick}>Menu</button>
            </div>
        </div>
    )
}

export default LandingPage;