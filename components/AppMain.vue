<template>
	<main class="axiom">
		<slot />
	</main>
</template>

<style>
	/* --- Headings --- */

	.typo h1 {
		font-size: 3.2rem;
		font-weight: 600;
		line-height: 1em;
		margin-bottom: 0.5em;
	}

	.typo h1:first-child {
		margin-top: 0;
	}

	.typo h1 .gradient {
		background-image: var(--gradient);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
	}

	.typo h2 {
		font-size: 2.4rem;
		font-weight: 600;
		line-height: 1em;
		margin-bottom: 0.5em;
	}

	.typo h3 {
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1em;
		margin-bottom: 0.5em;
	}

	/* --- Hero and Paragraphs --- */

	.typo .hero {
		font-size: 1.6rem;
		line-height: 1.25em;
		margin-bottom: 1em;
	}

	.typo strong {
		font-weight: 600;
	}

	.typo p {
		font-size: 1rem;
		line-height: 1.5em;
		margin-bottom: 1.5em;
	}

	.typo p:last-child {
		margin-bottom: 0;
	}

	/* --- Links --- */

	.typo a {
		transition: border 300ms ease, color 300ms ease;
		border-bottom: 2px solid var(--primary-color);
	}

	.typo a:hover {
		color: var(--primary-color);
		border-bottom: 2px solid transparent;
	}

	.typo a:focus {
		outline: none;
		color: var(--primary-color);
		border-bottom: 2px solid transparent;
	}

	/* --- Lists --- */

	.typo ul {
		padding: 0 0 0 1rem;
		margin: 0 0 1.4rem 0;
		list-style: disc;
	}

	.typo ul li {
		margin-bottom: 0.3rem;
	}

	.typo ul ul {
		margin: 0;
		list-style: circle;
	}

	.typo ul ol {
		margin: 0;
	}

	/* --- Input fields --- */

	.input-component-wrapper {
		position: relative;
		padding-top: 0.6rem;
	}
	.input-component-wrapper label {
		position: relative;
		display: inline-block;
		width: 100%;
	}

	.input-component-wrapper label span {
		position: absolute;
		top: 0.5em;
		line-height: 1em;
		left: 0;
		z-index: 1;
		pointer-events: none;
		opacity: 0.4;
		font-size: 1rem;
		transition: font-size 300ms ease, top 300ms ease;
	}

	.input-component-wrapper label:focus-within span,
	.input-component-wrapper label.active span {
		top: -0.8em;
		font-size: 0.8rem;
	}

	.input-component-wrapper input {
		position: relative;
		-webkit-appearance: none;
		appearance: none;
		display: inline-block;
		outline: 0;
		border-radius: 0;
		width: 100%;
		border: 0;
		border-bottom: 2px solid var(--border-color);
		color: var(--text-color);
		background: transparent !important;
		vertical-align: top;
		width: 100%;
		padding: 0.4em 0;
		margin: 0;
		transition: border 300ms ease;
	}

	.input-component-wrapper input:-webkit-autofill,
	.input-component-wrapper input:-webkit-autofill:focus {
		/* Autofill appearance */
		-webkit-box-shadow: 0 0 0 1000px #e3e8f0 inset;
		-webkit-text-fill-color: var(--text-color);
		background-clip: content-box !important;
	}

	html.dark .input-component-wrapper input:-webkit-autofill,
	html.dark .input-component-wrapper input:-webkit-autofill:focus {
		/* Autofill appearance */
		-webkit-box-shadow: 0 0 0 1000px #10141f inset;
		-webkit-text-fill-color: var(--text-color);
		background-clip: content-box !important;
	}

	.input-component-wrapper input:hover {
		border-bottom: 2px solid var(--text-color);
	}

	.input-component-wrapper input:focus {
		border-bottom: 2px solid var(--primary-color);
	}

	.input-component-wrapper input.status-red {
		border-bottom: 2px solid var(--error-color);
	}

	/* --- Radio and Checkbox --- */

	label {
		cursor: pointer;
	}

	input:where([type="checkbox"], [type="radio"]) {
		-webkit-appearance: none;
		appearance: none;
		width: 1.2rem;
		height: 1.2rem;
		outline: none;
		margin: 0;
		vertical-align: top;
		border: 2px solid var(--border-color);
		border-radius: 0.3rem;
		background: transparent;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		transition: border 300ms ease;
		cursor: pointer;
	}

	input[type="radio"] {
		border-radius: 50%;
	}

	label:hover input:where([type="checkbox"], [type="radio"]):where(:not(:disabled):not(:checked)) {
		border-color: var(--text-color) !important;
		outline: none;
	}

	input:where([type="checkbox"], [type="radio"]):where(:active:not(:disabled)) {
		outline: none;
	}

	input[type="checkbox"]:checked {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='%23fff' d='M0,8 5,13 14,4 12,2 5,9 2,6z'/%3E%3C/svg%3E%0A");
		background-size: 70% auto;
		background-color: var(--primary-color);
		border-color: var(--primary-color);
	}

	input[type="radio"]:checked {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle fill='%23fff' cx='5' cy='5' r='5'/%3E%3C/svg%3E");
		background-color: var(--primary-color);
		border-color: var(--primary-color);
	}

	input:where([type="checkbox"], [type="radio"]):disabled {
		opacity: 0.35;
		pointer-events: none;
	}

	/* --- Buttons --- */

	button {
		all: unset;
		cursor: pointer;
	}

	.button {
		display: inline-block;
		font-weight: 500;
		padding: 0.6rem 1.2rem;
		color: var(--bg-color);
		background: var(--text-color);
		text-decoration: none;
		border-radius: 10rem;
		border: 1px solid transparent;
		transition: background 300ms ease;
	}

	.button:hover {
		color: var(--bg-color);
		background: var(--primary-color);
	}
	.button:focus {
		outline: none;
		background: var(--primary-color);
	}

	.button-wire {
		display: inline-block;
		font-weight: 500;
		padding: 0.6rem 1.2rem;
		color: var(--bg-text);
		background: transparent;
		text-decoration: none;
		border: 1px solid var(--border-color);
		border-radius: 10rem;
		transition: color 300ms ease;
	}

	.button-wire:hover {
		color: var(--primary-color);
	}
	.button-wire:focus {
		outline: none;
		color: var(--primary-color);
	}

	.button-ghost {
		display: inline-block;
		font-weight: 500;
		padding: 0.6rem 1.2rem;
		color: var(--bg-text);
		background: transparent;
		text-decoration: none;
		border: 1px solid transparent;
		border-radius: 10rem;
		transition: color 300ms ease;
	}

	.button-ghost:hover {
		color: var(--primary-color);
	}
	.button-ghost:focus {
		outline: none;
		color: var(--primary-color);
	}

	/* --- Form sending --- */

	form.formsending {
		pointer-events: none;
	}

	form.formsending button {
		opacity: 0.2;
	}

	form.formsending div.input-component-wrapper:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 100%;
		background: var(--gradient);
		z-index: 10;
		animation: animatedbackground 3s ease alternate infinite;
		background-size: 300% 300%;
	}

	@keyframes animatedbackground {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
