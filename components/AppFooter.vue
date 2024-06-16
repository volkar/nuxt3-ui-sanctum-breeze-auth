<template>
	<footer role="contentinfo" class="axiom py-5 flex gap-2 flex-col items-center md:flex-row md:justify-between">
		<a href="https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth" target="_blank" class="flex items-center gap-1">
			<UIcon name="i-mdi-github-face" class="text-lg" />
			GitHub
		</a>

		<span class="text-gray-400 dark:text-gray-500">Nuxt UI for Laravel Breeze</span>
	</footer>
</template>

<style>
	footer[role="contentinfo"] a {
		color: var(--text-color);
		font-weight: 600;
		transition: color 300ms ease;
	}
	footer[role="contentinfo"] a:hover {
		color: var(--primary-color);
	}
</style>
