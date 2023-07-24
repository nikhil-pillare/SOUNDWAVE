import React from 'react';

import './App.css';
import NavBar from './Components/LandingSections/NavBar';
import MainRoutes from './Pages/MainRoutes';
import PaymentForm from './Test.tsx/text';

function App() {
  const handlePaymentSubmit = (paymentData: any) => {
    // This function will handle the payment data received from the PaymentForm component.
    // You can perform the actual payment processing or other actions here.
    console.log('Payment Data:', paymentData);
    // You can send the payment data to the backend server for further processing, e.g., to charge the user, save payment details, etc.
    // You might want to use axios or fetch to make an API call to your backend server.
    // Example:
    // axios.post('http://localhost:5000/process-payment', paymentData)
    //   .then((response) => {
    //     // Handle the response from the server, e.g., show a success message to the user.
    //   })
    //   .catch((error) => {
    //     // Handle errors, e.g., display an error message to the user.
    //   });
  };
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <NavBar/>
      <MainRoutes/>
   
    </div>
  );
}

export default App;
