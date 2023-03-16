import io from 'socket.io-client'
import { useCounterStore } from '@/stores/counter'

export default defineNuxtPlugin(() => {
    const socket = io(useRuntimeConfig().url + `:${useRuntimeConfig().public.socketPort}`);
    const store = useCounterStore();

    socket.on('new count', (message) => {
        store.update(message);
    });

    return {
        provide: {
            io: socket
        }
    }
})
