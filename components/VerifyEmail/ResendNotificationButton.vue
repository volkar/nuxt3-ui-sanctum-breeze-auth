<script lang="ts" setup>
	const sanctumFetch = useSanctumClient()
	const toast = useToast()

	async function sendEmailNotification() {
		try {
			const response = await sanctumFetch.raw("/email/verification-notification", { method: "POST" })

			if (response.type === "opaqueredirect") {
				await navigateTo(response.headers.get("Location"))
			}

			toast.add({ description: "Done! Check your inbox for the verification email.", color: "sky" })
		} catch (error) {
			toast.add({ description: "Failed to send the verification email. Please try again later.", color: "red" })
		}
	}
</script>

<template>
	<UButton type="submit" class="button-wire" @click="sendEmailNotification">Resend verification email</UButton>
</template>
