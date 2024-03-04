import io from "socket.io-client";

const connect_to_backend_socket = () => {
  const socket = io.connect("http://localhost:8080/", {
    transports: ["websocket"],
    cors: {
      origin: "http://127.0.0.1:5173/",
      methods: ["GET", "POST"],
      credentials: true,
    },
    reconnection : true,
    timeout : 5000,
    reconnectionAttempts : 3
  });
  return socket
}





export default connect_to_backend_socket;

