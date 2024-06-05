<script lang="ts" setup>
	definePageMeta({
		middleware: ["sanctum:guest"],
	})

	useSeoMeta({
		title: "Create account",
	})
</script>

<template>
	<FormAuthRegister />
</template>
