import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
	extends: ["plugin:prettier/recommended", "plugin:vue/essential", "@nuxtjs/eslint-config"],
})
