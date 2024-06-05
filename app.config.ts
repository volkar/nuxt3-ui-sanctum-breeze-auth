export default defineAppConfig({
	ui: {
		primary: "sky",
		gray: "slate",
		input: {
			variant: {
				none: "bg-transparent focus:ring-0 focus:shadow-none status-{color}",
			},
		},
		button: {
			default: {
				size: "fluid",
				variant: "empty",
			},
			variant: {
				empty: "",
			},
			padding: {
				fluid: "px-5 py-10",
			},
			size: {
				fluid: "text-md",
			},
		},
	},
	siteTitle: "Nuxt Breeze",
})
