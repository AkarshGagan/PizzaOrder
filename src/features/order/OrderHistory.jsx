import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useSelector } from 'react-redux';

function OrderHistory() {
  const { name } = useAppContext();
  const username = useSelector((state) => state.user.username);
  console.log(username, 'bvjvhj');
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    console.log(storedOrders, 'lbcjh');
    const orders = storedOrders.filter((order) => order.customer === username);
    console.log(orders);
    setOrders(orders);
  }, [username]);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Your Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.orderId} className="mb-4">
              <Link
                to={`/order/${order.orderId}`}
                className="text-blue-600 hover:underline"
              >
                Order ID: {order.orderId} - {order.customer}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button
        className="my-2 bg-slate-600 px-3 py-2 text-sm tracking-wide text-gray-200 sm:px-4 md:text-xs"
        onClick={() => navigate('/menu')}
      >
        {orders.length > 0 ? 'Order more' : 'Place orders'}
      </button>
    </div>
  );
}

export default OrderHistory;
