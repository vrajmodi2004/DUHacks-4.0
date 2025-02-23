import React, { useEffect, useState } from "react";
import { connectWebSocket, sendOrderUpdate } from "../Services/WebSocketService";
import { useNavigate } from "react-router-dom";

const OrderTracking = () => {
    const [orders, setOrders] = useState<{ orderId: string; status: string }[]>([]);
    const navigate = useNavigate();

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

    const getStatusColor = (status) => {
        switch (status) {
            case "Processing":
                return "bg-yellow-200 text-yellow-800";
            case "Out for Delivery":
                return "bg-blue-200 text-blue-800";
            case "Delivered":
                return "bg-green-200 text-green-800";
            default:
                return "bg-gray-200 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Order Tracking</h2>

                {orders.length === 0 ? (
                    <p className="text-gray-600 text-center">No orders being tracked.</p>
                ) : (
                    <ul className="space-y-4">
                        {orders.map((order) => (
                            <li key={order.orderId} className={`p-4 rounded-lg shadow-md ${getStatusColor(order.status)}`}>
                                <span className="font-semibold">Order {order.orderId}</span>: {order.status}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Simulating Status Updates */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => sendOrderUpdate("12345", "Processing")}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                    >
                        Set Processing
                    </button>
                    <button
                        onClick={() => sendOrderUpdate("12345", "Out for Delivery")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Set Out for Delivery
                    </button>
                    <button
                        onClick={() => sendOrderUpdate("12345", "Delivered")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                    >
                        Set Delivered
                    </button>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 w-full"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default OrderTracking;
