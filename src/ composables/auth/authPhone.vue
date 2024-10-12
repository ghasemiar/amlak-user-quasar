<template>
  <div class="tw-mt-10 tw-mx-10">
    <q-form v-if="!changeForm" @submit="onSubmit" class="tw-grid tw-gap-5">
      <q-input
        v-model="phone"
        outlined
        dense
        class=""
        :label="$t('phone')"
        :error="!!phoneError"
        :error-message="phoneError"
        :disable="sendPhoneLoading"
      />
      <q-btn type="submit" :loading="sendPhoneLoading" :label="$t('login')" color="teal" />
    </q-form>
    <q-form v-if="changeForm" @submit="onSubmit2" class="tw-grid tw-gap-5">
      <q-input
        outlined
        dense
        class="tw-border"
        v-model="phone"
        :label="$t('phone')"
        :error="!!phoneError"
        :error-message="phoneError"
        :disable="sendCodeLoading"
      />
      <q-input
        outlined
        dense
        v-model="otp"
        :label="$t('phone')"
        :error="!!otpError"
        :error-message="otpError"
        :disable="sendCodeLoading"
      />
      <q-btn type="submit" :loading="sendCodeLoading" :label="$t('login')" color="teal" />
    </q-form>
  </div>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { sendCode, sendPhone } from 'src/ composables/auth/auth.validate';
import { useSendCode, useSendPhone } from 'src/ composables/auth/useAuth';
const { request:sendPhoneReq, loading:sendPhoneLoading,changeForm } = useSendPhone();
const { request:sendCodeReq, loading:sendCodeLoading } = useSendCode();
const { handleSubmit } = useForm({
  validationSchema: changeForm.value ? sendCode: sendPhone(),
});
const { value: phone, errorMessage: phoneError } =
  useField<string>('phone');
const { value: otp, errorMessage: otpError } =
  useField<string>('otp');
const onSubmit = handleSubmit((values) => {
  sendPhoneReq(values)
});
const onSubmit2 = handleSubmit((values) => {
  sendCodeReq(values)
});
</script>
