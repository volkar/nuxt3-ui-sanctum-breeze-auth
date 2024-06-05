<script lang="ts" setup>
	definePageMeta({
		middleware: ["sanctum:guest"],
	})

	useSeoMeta({
		title: "Forgot password",
	})
</script>

<template>
	<FormAuthForgotPassword />
</template>
