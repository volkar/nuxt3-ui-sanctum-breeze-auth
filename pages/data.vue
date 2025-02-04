<script lang="ts" setup>
	definePageMeta({
		middleware: ["verified-user"],
	})

	useSeoMeta({
		title: "Data",
	})

	const { data, error, status } = await useApiGetCached("cards", "/api/user", 10)

	if (error?.value?.data && import.meta.client) {
		// Show error notification on client side

		if (typeof error.value.data === "object" && "error" in error.value.data) {
			showErrorNotification(error.value.data.error as string, 6000)
		}
	}
</script>

<template>
	<div class="typo">
		<h1>User data</h1>

		<div v-if="status === 'pending'">Loading...</div>

		<div v-if="data && status !== 'pending'" class="mb-5">
			<pre>{{ data }}</pre>
		</div>

		<div v-if="error">
			Error:<br />
			{{ error }}
		</div>
	</div>
</template>
