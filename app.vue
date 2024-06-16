<script setup lang="ts">
	const appConfig = useAppConfig()

	useHead({
		titleTemplate(title) {
			return title ? `${title} | ${appConfig.siteTitle}` : appConfig.siteTitle
		},
	})
</script>

<template>
	<NuxtLoadingIndicator :throttle="100" />

	<div id="app" class="loading">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>

	<UNotifications />
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* --- Variables --- */

	:root {
		--text-color: #181a1d;
		--bg-color: #ecf1fa;
		--primary-color: #0087c5;
		--border-color: #bbc7d6;
		--error-color: #ff3d00;
		--success-color: #7de11f;
		--gradient: linear-gradient(45deg, #613cf6 0%, #c855c0 25%, #f345b3 50%, #f87026 75%, #ffc105 100%);
		--mobile-font: 3.3vw;
		--desktop-font: 1.4vw;
	}

	:root.dark {
		--text-color: #dde6f1;
		--bg-color: #121723;
		--primary-color: #52c3f8;
		--border-color: #273241;
		--error-color: #ff3d00;
		--success-color: #b4fb71;
	}

	/* --- Base --- */

	html {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-size: var(--mobile-font);
		line-height: 1.2rem;

		color: var(--text-color);
		background-color: var(--bg-color);

		-webkit-overflow-scrolling: touch;
	}

	@media only screen and (orientation: landscape) and (min-width: 768px) {
		html {
			font-size: var(--desktop-font);
			font-size: clamp(calc(0.925 * var(--desktop-font)), calc(0.75 * var(--desktop-font) + 25%), calc(1.03 * var(--desktop-font)));
		}
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		box-sizing: border-box;
		position: relative;
		margin: 0;
		padding: 0;

		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
		font-weight: 300;

		color: var(--text-color);
		background-color: var(--bg-color);

		min-height: 100%;
		min-height: 100dvh;

		zoom: 1;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* --- Layout --- */

	#app {
		min-height: 100%;
		min-height: 100dvh;

		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: stretch;
	}

	header[role="banner"] {
		flex: 0 0;
	}

	footer[role="contentinfo"] {
		flex: 0 0;
	}

	main {
		flex: 1 0;
	}

	/* --- Main --- */

	main {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	@media only screen and (orientation: landscape) and (min-width: 768px) {
		main {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
	}

	/* Padding axiom */

	.axiom {
		padding-left: 8vw;
		padding-right: 8vw;
	}
	@media only screen and (orientation: landscape) and (min-width: 768px) {
		.axiom {
			padding-left: 5vw;
			padding-right: 5vw;
		}
	}

	/* --- Elements normalization --- */

	input,
	textarea,
	button,
	select,
	a {
		-webkit-tap-highlight-color: transparent;
	}

	a,
	input.submit,
	input.button,
	button {
		-webkit-appearance: none;
		-moz-appearance: none;
		cursor: pointer;
	}

	img {
		display: inline-block;
		width: 100%;
		height: auto;
	}

	/* --- Spinner loading animation --- */

	#app.loading > * {
		opacity: 0;
		pointer-events: none;
	}

	.loading::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -28px;
		margin-left: -28px;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		border: 3px solid var(--border-color);
		border-top-color: var(--primary-color);
		animation: loading 2s linear infinite;
	}
	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* --- Nuxt loading indicator --- */

	.nuxt-loading-indicator {
		background: var(--gradient) !important;
	}

	/* --- Primary color --- */

	.primary-color {
		color: var(--primary-color);
	}

	/* --- Notifications --- */

	.notification-progress-bar.bg-primary-500 {
		background-image: var(--gradient);
	}

	.notification-bg {
		background: #ffffff;
	}

	html.dark .notification-bg {
		background: #0b0f17;
	}
</style>
