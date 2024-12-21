'use client';
import React, { useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orderStatus, setOrderStatus] = useState('');

  const sendFakeOrder = async () => {
    const fakeOrder = {
      customer_id: 'clerk_user_123', // Use Clerk's user ID
      order_details: [
        { menu_item: "Pizza", quantity: 2 },
        { menu_item: "Burger", quantity: 1 },
      ],
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/myorder/fake-order/', fakeOrder);
      setOrderStatus(`Order Successful! Order ID: ${response.data.order_id}`);
    } catch (error) {
      setOrderStatus('Failed to place order.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Order Page</h1>
      <button onClick={sendFakeOrder}>Send Fake Order</button>
      <p>{orderStatus}</p>
    </div>
  );
};

export default OrdersPage;
