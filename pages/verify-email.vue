<script lang="ts" setup>
	definePageMeta({
		middleware: ["sanctum:unverified"],
	})

	useSeoMeta({
		title: "Verify email",
	})

	const { logout } = useSanctumAuth()
</script>

<template>
	<div class="typo flex flex-col gap-4 sm:min-w-80 md:min-w-96 max-w-md">
		<h1>Thanks for<br />signing up!</h1>
		<p>Before get started, could you verify your email address by clicking on the link we just emailed to you? If you did't receive the email, we will gladly send you another.</p>

		<div class="flex justify-between items-center">
			<VerifyEmailResendNotificationButton />
		</div>
	</div>
</template>
