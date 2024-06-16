// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		host: "127.0.0.1",
		port: 3000,
	},
	devtools: { enabled: true },
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
		redirectIfAuthenticated: true,
		redirect: {
			keepRequestedRoute: true,
			onLogin: "/dashboard",
			onAuthOnly: "/login",
			onGuestOnly: "/",
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
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{
					rel: "mask-icon",
					href: "/safari-pinned-tab.svg",
					color: "#5bbad5",
				},
				{
					rel: "manifest",
					href: "/site.webmanifest",
				},
			],

			meta: [
				{
					name: "msapplication-TileColor",
					content: "#ffffff",
				},
				{
					name: "theme-color",
					content: "#ffffff",
				},
			],
		},
	},
})
