<script lang="ts" setup>
	import type { User } from "~/models/user"

	definePageMeta({
		middleware: ["verified-user"],
	})

	useSeoMeta({
		title: "Dashboard",
	})

	const user = useSanctumUser<User>()

	const route = useRoute()
	const isJustVerified = route.query.verified as string | undefined
</script>

<template>
	<div class="typo">
		<h1>Your totally private<br /><span class="gradient">Verified dashboard</span></h1>
		<UAlert v-if="isJustVerified == '1'" class="mb-8" title="You successfully verified your email address!" color="sky" variant="soft" />
		<UserBlock />
	</div>
</template>
