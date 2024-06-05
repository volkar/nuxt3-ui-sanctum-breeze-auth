<script lang="ts" setup>
	definePageMeta({
		middleware: ["sanctum:guest"],
	})

	useSeoMeta({
		title: "Reset password",
	})

	const route = useRoute()

	const email = (route.query.email ?? "") as string
	const resetToken = route.params.hash as string
</script>

<template>
	<FormAuthPasswordReset :email="email" :token="resetToken" />
</template>
