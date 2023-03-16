<template>
	<button>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
	button {
		color: white;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: #ff6e48;
		cursor: pointer;
	}
</style>
