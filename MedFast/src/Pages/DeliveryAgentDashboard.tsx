import React, { useEffect, useState } from "react";
import { connectWebSocket, sendOrderUpdate } from "../Services/WebSocketService";
import { useNavigate } from "react-router-dom";

const DeliveryAgentDashboard = () => {
    interface Order {
        orderId: string;
        status: string;
    }
    
    const [orders, setOrders] = useState<Order[]>([]);
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

        // Fetch assigned orders for the logged-in delivery agent (Mocked for now)
        setOrders([
            { orderId: "12345", status: "Processing" },
            { orderId: "67890", status: "Processing" }
        ]);
    }, []);

    const updateStatus = (orderId, status) => {
        sendOrderUpdate(orderId, status);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Delivery Agent Dashboard</h2>

                {orders.length === 0 ? (
                    <p className="text-gray-600 text-center">No assigned orders.</p>
                ) : (
                    <ul className="space-y-4">
                        {orders.map((order) => (
                            <li key={order.orderId} className="p-4 rounded-lg shadow-md bg-gray-100">
                                <span className="font-semibold">Order {order.orderId}</span>: {order.status}
                                <div className="mt-2 space-x-2">
                                    <button
                                        onClick={() => updateStatus(order.orderId, "Processing")}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                    >
                                        Set Processing
                                    </button>
                                    <button
                                        onClick={() => updateStatus(order.orderId, "Out for Delivery")}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                    >
                                        Set Out for Delivery
                                    </button>
                                    <button
                                        onClick={() => updateStatus(order.orderId, "Delivered")}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Set Delivered
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

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

export default DeliveryAgentDashboard;
