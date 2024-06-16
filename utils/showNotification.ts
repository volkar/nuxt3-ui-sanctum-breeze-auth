export default function (message: string, timeout: number = 3000) {
	const toast = useToast()
	toast.add({ title: message, timeout: timeout })
}

export const showNotificationWithDescription = (message: string, description: string, timeout: number = 3000) => {
	const toast = useToast()
	toast.add({ title: message, description: description, timeout: timeout })
}

export const showErrorNotification = (message: string, timeout: number = 3000) => {
	const toast = useToast()
	toast.add({ title: "Error: " + message, timeout: timeout, color: "red", icon: "i-mdi-alert-decagram" })
}
