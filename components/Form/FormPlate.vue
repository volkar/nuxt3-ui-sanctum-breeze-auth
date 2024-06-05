<template>
	<div class="form-plate">
		<slot />
	</div>
</template>

<style>
	.form-plate {
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.04);
		max-width: 25rem;
		margin: 0 auto;
		border-radius: 0.8rem;
	}
	html.dark .form-plate {
		background-color: rgba(0, 0, 0, 0.12);
	}
</style>
