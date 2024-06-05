<script lang="ts" setup>
	import type { NuxtError } from "#app"

	const props = defineProps({
		error: Object as () => NuxtError,
	})
	const appConfig = useAppConfig()
	useHead({
		title: `Error | ${appConfig.siteTitle}`,
	})
</script>

<template>
	<div id="app">
		<NuxtLayout>
			<div class="typo flex items-center justify-center text-center">
				<div>
					<h1 class="!text-7xl !mb-3">{{ error.statusCode }}</h1>
					<p class="font-semibold">{{ error.message }}</p>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>
