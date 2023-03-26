<template></template>

<script lang="ts" setup></script>

<style lang="scss">
	$prime: #17eb9c;
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

	button {
		color: $ciSecond;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: #17eb9c;
		cursor: pointer;
	}
</style>
