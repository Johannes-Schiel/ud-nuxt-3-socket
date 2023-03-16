<template>
	<div>
		<p>id: {{ $io.id }}</p>
		<p>count: {{ store.count }}</p>

		<button @click="up()">Up</button>
		<button @click="down()">down</button>
	</div>
</template>

<script lang="ts">
	import { storeToRefs } from 'pinia';
	import { useCounterStore } from '@/stores/counter';

	export default {
		data: () => ({}),
		methods: {
			up() {
				this.$io.emit('up', { value: 5 });
			},
			down() {
				this.$io.emit('down', { value: 5 });
			},
		},
		setup() {
			return { store: useCounterStore() };
		},
	};
</script>
