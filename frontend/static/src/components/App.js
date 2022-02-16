import { useState } from 'react';
import AdminPage from './Admin_Page/AdminPage';
import './App.css';
import LandingPage from './Landing_Page/LandingPage';
import MenuPage from './Menu/MenuPage';
import Order from './Order/Order'
import ThankYouPage from './Thankyou_Page/ThankYouPage';

function App() {

  const [pageDisplayed, setPageDisplayed] = useState(1);
  const [orderState, setOrderState] = useState([]);

  let orderArray = [null];

  if(orderState.length !== 0) {
    orderArray.push(...orderState);
  }
  
  return (
    <div className="restaurant-app-main">
      {pageDisplayed === 1 && <LandingPage setPageDisplayed={setPageDisplayed}/>}
      {pageDisplayed === 2 && <MenuPage orderArray={orderArray} orderState={orderState} setOrderState={setOrderState} setPageDisplayed={setPageDisplayed}/>}
      {pageDisplayed === 3 && <Order orderState={orderState} setPageDisplayed={setPageDisplayed}/>}
      {pageDisplayed === 4 && <ThankYouPage setPageDisplayed={setPageDisplayed} setOrderState={setOrderState}/>}
      {pageDisplayed === 5 && <AdminPage/>}
    </div>
  );
}

export default App;
