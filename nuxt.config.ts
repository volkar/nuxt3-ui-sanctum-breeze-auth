// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		host: "127.0.0.1",
		port: 3000,
	},
	devtools: { enabled: false },
	modules: ["@nuxt/ui", "nuxt-auth-sanctum", "@nuxt/eslint"],
	eslint: {
		config: {
			stylistic: true,
		},
	},

	typescript: {
		strict: true,
		typeCheck: "build",
	},

	nitro: {
		compressPublicAssets: true,
	},

	ui: {
		icons: ["heroicons", "mdi"],
	},

	sanctum: {
		baseUrl: "http://127.0.0.1:8000",
		origin: "http://127.0.0.1:3000",
		redirect: {
			onGuestOnly: "/dashboard",
		},
	},

	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			htmlAttrs: {
				lang: "en",
				class: "scroll-smooth",
			},
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
				{
					rel: "shortcut icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
			],
		},
	},
})
