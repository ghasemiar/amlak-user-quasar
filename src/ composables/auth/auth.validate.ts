import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { getCurrentInstance } from 'vue';
const phoneReg = /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g
export const registerUsername = () => {
  const instance = getCurrentInstance()?.proxy?.$t;
  return toTypedSchema(
    yup.object({
      username: yup.string().min(4).max(10).required(instance!('is required')),
      password: yup.string().required(instance!('is required')),
    })
  );
};
export const sendPhone = () => {
  const instance = getCurrentInstance()?.proxy?.$t;
  return toTypedSchema(
    yup.object({
      phone: yup.string().matches(phoneReg,instance!('bad format')).required(instance!('is required')),
    })
  );
};
export const sendCode = () => {
  const instance = getCurrentInstance()?.proxy?.$t;
  return toTypedSchema(
    yup.object({
      phone: yup.string().matches(phoneReg,instance!('bad format')).required(instance!('is required')),
      otp: yup.string().min(5).max(5).required(instance!('is required')),
    })
  );
};
