import { postData } from 'src/helper/axios.instance';

export const sendPhoneService = async (data:any) => {
  return await postData('/user/register-phone', data);
};
export const sendCodeService = async (data:any) => {
  return await postData('/user/register-code', data);
};
export const registerUsername = async (data:any) => {
  return await postData('/user/login', data);
};
