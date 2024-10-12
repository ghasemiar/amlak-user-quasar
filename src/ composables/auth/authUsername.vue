<template>
  <div class="tw-mt-10 tw-mx-10">
    <q-form @submit="onSubmit" class="tw-grid tw-gap-5">
      <q-input
        v-model="username"
        outlined
        dense
        :label="$t('username')"
        :error="!!usernameError"
        :error-message="usernameError"
        :disable="loading"
      />
      <q-input
        :label="$t('password')"
        outlined
        dense
        v-model="password"
        :disable="loading"
        :error="!!passwordError"
        :error-message="passwordError"
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            color="teal"
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn type="submit" :loading="loading" :label="$t('login')" color="teal" />
    </q-form>
  </div>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { registerUsername } from 'src/ composables/auth/auth.validate';
import { useRegisterUsername } from 'src/ composables/auth/useAuth';
import { ref } from 'vue';
const isPwd = ref(false);
const { request, loading } = useRegisterUsername();
const { handleSubmit } = useForm({
  validationSchema: registerUsername(),
});
const { value: username, errorMessage: usernameError } =
  useField<string>('username');
const { value: password, errorMessage: passwordError } =
  useField<string>('password');
const onSubmit = handleSubmit(async (values) => {
  await request(values)
});
</script>
