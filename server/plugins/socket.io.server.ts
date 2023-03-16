// nuxt3-project/plugins/socket.io.ts
import { Server } from 'socket.io';

let count = 0;

export default defineNitroPlugin((nitroApp) => {

    const io = new Server(useRuntimeConfig().public.socketPort, {
        serveClient: false,
        cors: {
            origin: '*',
        }
    });

    io.on('connect', (socket) => {
        socket.on('up', (message: { value: number }) => {
            count = count + message.value;
            io.emit('new count', count);
        })
        socket.on('down', (message: { value: number }) => {
            count = count - message.value;
            io.emit('new count', count);
        })
    })
})