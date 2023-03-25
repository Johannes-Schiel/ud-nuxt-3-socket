import { Server } from 'socket.io';

let count = 0;

export const socketServer = new Server(
    useRuntimeConfig().public.socketPort, {
    serveClient: false,
    cors: {
        origin: '*',
    }
});

export default defineNitroPlugin((nitroApp) => {

    socketServer.on('connection', (socket) => {
        socket.emit(SocketEvent.new_count, count);
    });

    socketServer.on('connect', (socket) => {

        socket.on(SocketEvent.up, (message: { value: number }) => {
            count = count + message.value;
            socket.emit(SocketEvent.new_count, count);
        });

        socket.on(SocketEvent.down, (message: { value: number }) => {
            count = count - message.value;
            socket.emit(SocketEvent.new_count, count);
        });


    });


});