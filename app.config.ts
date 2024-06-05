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
		notification: {
			progress: {
				base: "absolute bottom-0 end-0 start-0 h-1",
				background: "notification-progress-bar",
			},
			background: "notification-bg",
		},
	},
	siteTitle: "Nuxt Breeze",
})
