export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", () => {
		const appElement = document.querySelector("#app")
		if (appElement) {
			appElement.classList.remove("loading")
		}
	})
})
