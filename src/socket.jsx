import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", {
  transports: ["websocket"],
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export default socket;
