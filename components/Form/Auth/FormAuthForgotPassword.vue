<script lang="ts" setup>
	import { z } from "zod"
	import type { FormSubmitEvent, Form } from "#ui/types"

	const sanctumFetch = useSanctumClient()

	const formSending = ref(false)

	const schema = z.object({
		email: z.string().email(),
	})

	type Schema = z.output<typeof schema>

	const form = ref<Form<Schema>>()
	const state = reactive<Schema>({
		email: "",
	})

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		formSending.value = true
		form.value?.clear()

		const email = event.data.email

		try {
			await sanctumFetch("/forgot-password", {
				method: "POST",
				body: { email },
			}).then(forgotPasswordSuccessSequence)
		} catch (error) {
			formSending.value = false
			const err = useSanctumError(error)

			if (err.isValidationError) {
				form.value?.setErrors(err.bag)
			}
		}
	}

	const forgotPasswordSuccessSequence = () => {
		formSending.value = false
		showNotificationWithDescription("Password reset link sent", "We have emailed your password reset link!", 5000)
	}
</script>

<template>
	<FormPlate class="typo">
		<h2 class="!mb-8">Forgot your password?<br />No worries!</h2>
		<p>Just enter your email and we will send you a password reset link that will allow you to choose a new one.</p>

		<UForm ref="form" :schema="schema" :state="state" @submit="onSubmit" :class="{ formsending: formSending }">
			<div class="input-component-wrapper mb-8">
				<label :class="{ active: state.email }">
					<span>Email</span>
					<UFormGroup name="email">
						<UInput v-model="state.email" type="email" variant="none" autocomplete="username" />
					</UFormGroup>
				</label>
			</div>

			<div class="mb-8">
				<UButton type="submit" class="button">Email password reset link</UButton>
			</div>

			<p class="!mb-2">Already registered? <ULink to="/login">Sign in</ULink></p>
			<p>Not a member yet? <ULink to="/register">Create account</ULink></p>
		</UForm>
	</FormPlate>
</template>
