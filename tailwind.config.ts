import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				red: {
					"50": "#FFEBE5",
					"100": "#FFD8CC",
					"200": "#FFB199",
					"300": "#FF8A66",
					"400": "#FF6333",
					"500": "#FF3D00",
					"600": "#CC3000",
					"700": "#992400",
					"800": "#661800",
					"900": "#330C00",
					"950": "#190600",
				},
			},
		},
	},
}
