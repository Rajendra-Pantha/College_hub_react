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


// import io from 'socket.io-client';

// const initializeSocket = async () => {
//   const socket = io('http://localhost:8080', {
//     transports: ['websocket'],
//     cors: {
//       origin: 'http://127.0.0.1:5173',
//       methods: ['GET', 'POST'],
//       withCredentials: true,
//     },
//   });

//   // Wait for the socket to connect
//   await new Promise((resolve) => {
//     socket.on('connect', () => {
//       resolve();
//     });
//   });

//   return socket;
// };

// export default initializeSocket;




