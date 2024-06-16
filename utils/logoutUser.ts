export default async function () {
	const { logout, refreshIdentity } = useSanctumAuth()
	const logoutMessage = "You have been logged out"

	try {
		await refreshIdentity()
	} catch (error) {
		// If refreshing identity fails, navigate to index page
		navigateTo("/")
		showNotification(logoutMessage)
		return
	}

	// If refreshing identity succeeds, log out the user
	await logout()
	showNotification(logoutMessage)
}
