<script lang="ts" setup>
	import type { User } from "~/models/user"
	const user = useSanctumUser<User>()
</script>

<template>
	<div class="flex items-center">
		<UIcon name="i-mdi-account-circle-outline" class="text-4xl mr-3 primary-color" />
		<span v-if="user"
			>Logged in as
			<strong
				>{{ user?.name }}<br /><span class="text-gray-400 dark:text-gray-500">{{ user?.email }}</span> <span v-if="user?.email_verified_at" class="text-gray-400 dark:text-gray-500"> / verified</span><span v-if="!user?.email_verified_at" class="text-red-400 dark:text-red-300"> / unverified</span>
			</strong></span
		>
		<span v-if="!user">You are not logged in</span>
	</div>
</template>
