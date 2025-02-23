import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const SOCKET_URL = "http://localhost:8080/ws";

let stompClient = null;

export const connectWebSocket = (callback) => {
    stompClient = new Client({
        webSocketFactory: () => new SockJS(SOCKET_URL),
        reconnectDelay: 5000,
        onConnect: () => {
            stompClient.subscribe("/order-status/update", (message) => {
                callback(JSON.parse(message.body));
            });
        },
    });
    stompClient.activate();
};

export const sendOrderUpdate = (orderId, status) => {
    if (stompClient && stompClient.connected) {
        stompClient.publish({
            destination: "/app/update-status",
            body: JSON.stringify({ orderId, status }),
        });
    }
};
