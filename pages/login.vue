<script lang="ts" setup>
	definePageMeta({
		middleware: ["sanctum:guest"],
	})

	useSeoMeta({
		title: "Sign in",
	})

	const route = useRoute()
	const resetToken = route.query.reset as string | undefined
</script>

<template>
	<FormAuthLogin :token="resetToken" />
</template>
