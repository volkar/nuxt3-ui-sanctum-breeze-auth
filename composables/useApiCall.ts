export async function useApiGet(key: string, url: RequestInfo, useAsyncDataOptions: {} = { lazy: true }) {
	const { data, error, status } = await useApiCall(key, url, "GET", null, useAsyncDataOptions)

	return {
		data,
		error,
		status,
	}
}

export async function useApiGetCached(key: string, url: RequestInfo, cacheSeconds: number, useAsyncDataOptions: {} = { lazy: true }) {
	const nuxtApp = useNuxtApp()

	const { data, error, status } = await useApiCall(key, url, "GET", null, {
		...useAsyncDataOptions,
		transform(input: {}) {
			return {
				...input,
				fetchedAt: new Date(),
			}
		},
		getCachedData(key: string) {
			const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key]
			if (!data) {
				// No cached data, refetch
				return
			}

			const expirationDate = new Date(data.fetchedAt)
			expirationDate.setTime(expirationDate.getTime() + cacheSeconds * 1000)

			if (expirationDate.getTime() < Date.now()) {
				// Data expired, refetch
				return
			}

			// Return cached data
			return data
		},
	})

	return {
		data,
		error,
		status,
	}
}

async function useApiCall(key: string, url: RequestInfo, method: string, body: { value: any } | null, useAsyncDataOptions: {}) {
	const options = {
		method: method,
		body: body?.value ? body.value : null,
	}

	const client = useSanctumClient()
	const { data, error, status } = await useAsyncData(key, () => client(url, options), useAsyncDataOptions)

	return {
		data,
		error,
		status,
	}
}
