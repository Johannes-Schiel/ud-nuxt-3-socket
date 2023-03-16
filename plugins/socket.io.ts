import io from 'socket.io-client'
import { useCounterStore } from '@/stores/counter'

export default defineNuxtPlugin(() => {
    const socket = io(`${useRuntimeConfig().public.url}:${useRuntimeConfig().public.socketPort}`);
    const store = useCounterStore();

    socket.on('user connected', (message) => {
        console.log('user connected', message)
    });

    socket.on('user disconnect', (message) => {
        console.log('user disconnect', message)
    });

    socket.on('new count', (message) => {
        store.update(message);
    });

    return {
        provide: {
            io: socket
        }
    }
})
