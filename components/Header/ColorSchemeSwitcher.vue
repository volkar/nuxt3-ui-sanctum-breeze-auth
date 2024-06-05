<script lang="ts" setup>
	const mode = useNuxtApp().$colorMode

	if (!mode.preference) {
		mode.preference = "dark"
	}

	const setMode = (selectedMode: string) => {
		mode.preference = selectedMode
	}
</script>

<template>
	<button v-if="mode.preference != 'dark'" class="m-0 py-1 block lg:inline-block" @click="setMode('dark')"><UIcon name="i-heroicons-moon" class="text-2xl align-middle" /><span class="lg:hidden"> Dark mode</span></button>
	<button v-if="mode.preference == 'dark'" class="m-0 py-1 block lg:inline-block" @click="setMode('light')"><UIcon name="i-heroicons-sun" class="text-2xl align-middle" /><span class="lg:hidden"> Light mode</span></button>
</template>

<style scoped>
	span {
		font-weight: 600;
	}
</style>
