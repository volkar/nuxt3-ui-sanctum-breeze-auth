<script lang="ts" setup>
	import { z } from "zod"
	import type { Form, FormSubmitEvent } from "#ui/types"

	const formSending = ref(false)

	interface Props {
		email: string
		token: string
	}

	const props = defineProps<Props>()

	const sanctumFetch = useSanctumClient()

	const schema = z
		.object({
			email: z.string().email(),
			password: z.string().min(8),
			password_confirmation: z.string().min(8),
			token: z.string(),
		})
		.refine((data) => data.password === data.password_confirmation, {
			message: "Passwords do not match",
			path: ["password_confirmation"],
		})

	type Schema = z.output<typeof schema>

	const form = ref<Form<Schema>>()
	const state = reactive<Schema>({
		email: props.email,
		password: "",
		password_confirmation: "",
		token: props.token,
	})

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		formSending.value = true
		form.value?.clear()
		const payload = event.data

		try {
			await sanctumFetch("/reset-password", {
				method: "POST",
				body: payload,
			}).then(resetPasswordSuccessSequence)

			await navigateTo({ path: "/login", query: { reset: "true" } })
		} catch (error) {
			formSending.value = false
			const err = useSanctumError(error)

			if (err.isValidationError) {
				form.value?.setErrors(err.bag)
			}
		}
	}

	const resetPasswordSuccessSequence = () => {
		formSending.value = false
		showNotification("Password have been changed successfully")
	}
</script>

<template>
	<FormPlate class="typo">
		<h2 class="!mb-8">Reset password</h2>

		<UForm ref="form" :schema="schema" :state="state" @submit="onSubmit" :class="{ formsending: formSending }">
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
					<span>New password</span>
					<UFormGroup name="password">
						<UInput v-model="state.password" type="password" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="input-component-wrapper mb-6">
				<label :class="{ active: state.password_confirmation }">
					<span>Confirm new password</span>
					<UFormGroup name="password_confirmation">
						<UInput v-model="state.password_confirmation" type="password" variant="none" />
					</UFormGroup>
				</label>
			</div>

			<div class="mb-8">
				<UButton type="submit" class="button">Reset password</UButton>
			</div>
		</UForm>
	</FormPlate>
</template>
