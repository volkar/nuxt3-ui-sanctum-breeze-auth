<script lang="ts" setup>
	import type { User } from "~/models/user"

	const { user } = useSanctumAuth<User>()
	const fixedHeader = false
	const mobileMenuOpened = ref(false)

	const handleLogout = async () => {
		logoutUser()
	}
</script>

<template>
	<div class="h-20" v-if="fixedHeader"></div>
	<header role="banner" :class="{ fixedheader: fixedHeader }">
		<nav class="axiom flex items-center justify-between flex-wrap py-5">
			<div class="flex-grow lg:flex-shrink lg:flex-grow-0 order-1 lg:mr-10">
				<HeaderLogo />
			</div>

			<div class="main-menu w-full flex-grow lg:items-center lg:w-auto order-4 lg:order-2 lg:flex pt-6 lg:pt-0" :class="{ flex: mobileMenuOpened, hidden: !mobileMenuOpened }">
				<ul class="lg:flex justify-start flex-1 items-center">
					<li class="lg:mr-6 border-b-gray-300 dark:border-b-gray-800 border-b-2 lg:border-0 py-4 lg:py-0">
						<ULink to="/" class="text" active-class="primary-color">Index</ULink>
					</li>
					<li class="lg:mr-6 border-b-gray-300 dark:border-b-gray-800 border-b-2 lg:border-0 py-4 lg:py-0" v-if="user">
						<ULink to="/dashboard" class="text" active-class="primary-color">Dashboard</ULink>
					</li>
				</ul>
			</div>

			<div class="main-menu w-full lg:items-center lg:w-auto order-5 lg:order-3 lg:flex" :class="{ flex: mobileMenuOpened, hidden: !mobileMenuOpened }">
				<ul class="lg:flex lg:justify-end flex-1 lg:items-center">
					<li v-if="!user" class="lg:mr-6 border-b-gray-300 dark:border-b-gray-800 border-b-2 lg:border-0 py-4 lg:py-0">
						<ULink to="/login" class="text" active-class="primary-color">Sign in</ULink>
					</li>
					<li v-if="!user" class="lg:mr-6 border-b-gray-300 dark:border-b-gray-800 border-b-2 lg:border-0 py-4 lg:py-0">
						<ULink to="/register" class="text" active-class="primary-color">Create account</ULink>
					</li>
					<li v-if="user" class="lg:mr-6 hidden lg:inline-block">
						<ULink to="/dashboard" class="text flex items-center gap-1"><UIcon name="i-mdi-account-circle-outline" class="text-lg" /> {{ user?.name }}</ULink>
					</li>
					<li v-if="user" class="lg:mr-6 border-b-gray-300 dark:border-b-gray-800 border-b-2 lg:border-0 py-4 lg:py-0">
						<ULink to="/logout" class="text" @click.prevent="handleLogout">Sign out</ULink>
					</li>
					<li class="m-0 py-3 lg:py-0">
						<ClientOnly>
							<HeaderColorSchemeSwitcher />
						</ClientOnly>
					</li>
				</ul>
			</div>

			<div v-if="!mobileMenuOpened" class="block lg:hidden order-2 lg:order-4">
				<button class="flex items-center py-2" @click.prevent="mobileMenuOpened = true">
					<span class="sr-only">Open main menu</span>
					<UIcon name="i-mdi-menu" class="text-3xl" />
				</button>
			</div>
			<div v-if="mobileMenuOpened" class="block lg:hidden order-2 lg:order-4">
				<button class="flex items-center py-2" @click.prevent="mobileMenuOpened = false">
					<span class="sr-only">Close main menu</span>
					<UIcon name="i-mdi-window-close" class="text-3xl" />
				</button>
			</div>
		</nav>
	</header>
</template>

<style>
	header[role="banner"] .main-menu a.text {
		transition: color 300ms ease;
		font-weight: 600;
	}

	header[role="banner"] .main-menu a.text:hover {
		color: var(--primary-color);
	}
	header[role="banner"] .main-menu a.text:focus {
		outline: none;
		color: var(--primary-color);
	}

	header[role="banner"].fixedheader {
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		position: fixed;
		background-color: var(--bg-color);
	}
</style>
