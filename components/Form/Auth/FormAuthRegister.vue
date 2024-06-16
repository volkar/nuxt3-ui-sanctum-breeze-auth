<script lang="ts" setup>
	import { z } from "zod"
	import type { FormSubmitEvent, Form } from "#ui/types"

	const formSending = ref(false)

	const sanctumConfig = useSanctumConfig()
	const sanctumFetch = useSanctumClient()
	const { refreshIdentity } = useSanctumAuth()

	const schema = z
		.object({
			name: z.string(),
			email: z.string().email(),
			password: z.string().min(8),
			password_confirmation: z.string().min(8),
		})
		.refine((data) => data.password === data.password_confirmation, {
			message: "Passwords do not match",
			path: ["password_confirmation"],
		})

	type Schema = z.output<typeof schema>

	const form = ref<Form<Schema>>()
	const state = reactive<Schema>({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	})

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		formSending.value = true
		form.value?.clear()

		const credentials = event.data

		try {
			await sanctumFetch("/register", {
				method: "POST",
				body: credentials,
			})

			await refreshIdentity().then(registerSuccessSequence)

			navigateTo(sanctumConfig.redirect.onGuestOnly || "/")
		} catch (error) {
			formSending.value = false
			const err = useSanctumError(error)

			if (err.isValidationError) {
				form.value?.setErrors(err.bag)
			}
		}
	}

	const registerSuccessSequence = () => {
		formSending.value = false
		showNotification("Account have been successfully created")
	}
</script>

<template>
	<FormPlate class="typo">
		<h2 class="!mb-8">Create account</h2>

		<UForm ref="form" :schema="schema" :state="state" @submit="onSubmit" :class="{ formsending: formSending }">
			<div class="input-component-wrapper mb-4">
				<label :class="{ active: state.name }">
					<span>Name</span>
					<UFormGroup name="name">
						<UInput v-model="state.name" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="input-component-wrapper mb-4">
				<label :class="{ active: state.email }">
					<span>Email</span>
					<UFormGroup name="email">
						<UInput v-model="state.email" type="email" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="input-component-wrapper mb-4">
				<label :class="{ active: state.password }">
					<span>Password</span>
					<UFormGroup name="password">
						<UInput v-model="state.password" type="password" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="input-component-wrapper mb-6">
				<label :class="{ active: state.password_confirmation }">
					<span>Confirm password</span>
					<UFormGroup name="password_confirmation">
						<UInput v-model="state.password_confirmation" type="password" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="mb-8">
				<UButton type="submit" class="button">Create account</UButton>
			</div>

			<p>Already registered? <ULink to="/login">Sign in</ULink></p>
		</UForm>
	</FormPlate>
</template>
