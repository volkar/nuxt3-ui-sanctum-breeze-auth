<script lang="ts" setup>
	const sanctumFetch = useSanctumClient()

	async function sendEmailNotification() {
		try {
			const response = await sanctumFetch.raw("/email/verification-notification", { method: "POST" })

			if (response.type === "opaqueredirect") {
				await navigateTo(response.headers.get("Location"))
			}

			showNotification("Done! Check your inbox for the verification email.")
		} catch (error) {
			showErrorNotification("Failed to send the verification email. Please try again later.")
		}
	}
</script>

<template>
	<UButton type="submit" class="button-wire" @click="sendEmailNotification">Resend verification email</UButton>
</template>
