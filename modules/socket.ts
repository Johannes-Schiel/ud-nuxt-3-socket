import { Server } from 'socket.io'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.hook('listen', async (server) => {
            const io = new Server(server);
            let count = 0;

            nuxt.hook('close', () => io.close())

            io.on('connection', (socket) => {
                console.log(`Socket connected: ${socket.id}`)
                socket.broadcast.emit('user connected', socket.id);

                socket.on('disconnect', () => {
                    socket.broadcast.emit('user disconnect', socket.id);
                });

                socket.on('up', (message: { value: number }) => {
                    count = count + message.value;
                    io.emit('new count', count);
                    console.log('new count', count)
                })

                socket.on('down', (message: { value: number }) => {
                    count = count - message.value;
                    io.emit('new count', count);
                    console.log('new count', count)
                })
            })

        })
    }
})