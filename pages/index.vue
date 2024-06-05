<script lang="ts" setup>
	import type { User } from "~/models/user"
	const user = useSanctumUser<User>()

	useSeoMeta({
		title: "Welcome",
	})
</script>

<template>
	<div class="typo">
		<h1>Nuxt SPA for<br /><span class="gradient">Laravel Breeze</span> API</h1>
		<p>Powered by <a href="https://nuxt.com/modules/nuxt-auth-sanctum" target="_blank" rel="nofollow">nuxt-auth-sanctum</a>, <a href="https://github.com/volkar/amethyst-lite" target="_blank" rel="nofollow">amethyst-lite</a><br />Auth code and templates has been <span class="italic">inspired</span> from <a href="https://github.com/manchenkoff/breeze-nuxt" target="_blank" rel="nofollow">breeze-nuxt</a></p>
		<UserBlock />
	</div>
</template>
