<script lang="ts" setup>
	import { z } from "zod"
	import type { FormSubmitEvent, Form } from "#ui/types"

	interface Props {
		token?: string
	}

	const props = defineProps<Props>()

	const { login } = useSanctumAuth()

	const formSending = ref(false)

	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(8),
		remember: z.boolean(),
	})

	type Schema = z.output<typeof schema>

	const form = ref<Form<Schema>>()
	const state = reactive<Schema>({
		email: "",
		password: "",
		remember: false,
	})

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		formSending.value = true
		form.value?.clear()

		const credentials = event.data

		try {
			await login(credentials).then(loginSuccessSequence)
		} catch (error) {
			formSending.value = false
			const err = useSanctumError(error)

			if (err.isValidationError) {
				form.value?.setErrors(err.bag)
			}
		}
	}

	const loginSuccessSequence = () => {
		formSending.value = false
		showNotification("You have been logged in")
	}
</script>

<template>
	<FormPlate class="typo">
		<h2 class="!mb-8">Sign in</h2>

		<UForm ref="form" :schema="schema" :state="state" @submit="onSubmit" :class="{ formsending: formSending }">
			<UAlert v-if="props.token" class="mb-4" title="Your password has been reset!" color="sky" variant="soft" />

			<div class="input-component-wrapper mb-4">
				<label :class="{ active: state.email }">
					<span>Email</span>
					<UFormGroup name="email">
						<UInput v-model="state.email" type="email" variant="none" autocomplete="username" />
					</UFormGroup>
				</label>
			</div>

			<div class="input-component-wrapper mb-6">
				<label :class="{ active: state.password }">
					<span>Password</span>
					<UFormGroup name="password">
						<UInput v-model="state.password" type="password" variant="none" autocomplete="current-password" />
					</UFormGroup>
				</label>
			</div>

			<UFormGroup name="remember_me" class="mb-8">
				<div class="mb-4">
					<label><input type="checkbox" class="mr-2" v-model="state.remember" name="remember_me" /> Remember me</label>
				</div>
			</UFormGroup>

			<div class="mb-8">
				<UButton type="submit" class="button">Sign in</UButton>
			</div>

			<p class="!mb-2"><ULink to="/forgot-password">Forgot your password?</ULink></p>
			<p>Not a member yet? <ULink to="/register">Create account</ULink></p>
		</UForm>
	</FormPlate>
</template>
