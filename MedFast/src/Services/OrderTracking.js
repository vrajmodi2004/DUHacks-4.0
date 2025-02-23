import { useEffect, useState } from "react";
import { connectWebSocket, sendOrderUpdate } from "./Services/websocketService";

const OrderTracking = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        connectWebSocket((update) => {
            setOrders((prevOrders) => {
                const updatedOrders = [...prevOrders];
                const orderIndex = updatedOrders.findIndex(o => o.orderId === update.orderId);
                if (orderIndex !== -1) {
                    updatedOrders[orderIndex].status = update.status;
                } else {
                    updatedOrders.push(update);
                }
                return updatedOrders;
            });
        });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Order Tracking</h2>
            {orders.length === 0 ? (
                <p>No orders being tracked.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.orderId} className="border p-2 my-2">
                            Order <strong>{order.orderId}</strong>: {order.status}
                        </li>
                    ))}
                </ul>
            )}
            {/* Simulating a status update */}
            <button
                onClick={() => sendOrderUpdate("12345", "Out for Delivery")}
                className="bg-blue-500 text-white p-2 mt-4"
            >
                Simulate &quot;Out for Delivery&quot;
            </button>
        </div>
    );
};

export default OrderTracking;
