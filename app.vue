<template>
	<div>
		<p>id: {{ $io.id }}</p>
		<p>count: {{ store.count }}</p>

		<div class="buttons">
			<Button @click="up()">Up</Button>
			<Button @click="down()">down</Button>
		</div>
	</div>
</template>

<script lang="ts">
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

<style lang="scss">
	$prime: #ff6e48;
	$ciBlue: #00fff1;
	$ciRed: #ff00aa;
	$ciWhite: #ffffff;
	$ciGreen: #46fcb4;
	$ciSecond: #0c1016;

	$roboto: 'Roboto';

	@font-face {
		font-family: $roboto;
		src: url('https://assets.codepen.io/907368/Roboto-Bold.ttf');
		font-weight: 700;
	}

	@font-face {
		font-family: $roboto;
		src: url('https://assets.codepen.io/907368/Roboto-Regular.ttf');
		font-weight: 500;
	}

	@font-face {
		font-family: $roboto;
		src: url('https://assets.codepen.io/907368/Roboto-Light.ttf');
		font-weight: 300;
	}

	body,
	html {
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $ciSecond;
		font-size: 20px;
		margin: 0;
		padding: 0;
		text-align: center;
		color: $ciWhite;
		font-family: $roboto;
		overflow-x: hidden;
	}

	* {
		box-sizing: border-box;
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
