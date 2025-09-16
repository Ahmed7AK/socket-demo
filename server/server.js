import http from "http";
import { Server } from "socket.io";

const server = http.createServer();

const io = new Server(server, {
    cors: {origin: "*"}
})

io.on("connection", (socket) => {
    console.log("user connected");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is on PORT ${PORT}`);
});