import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || null);
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  };
  const setToken = (newToken: string) => {
    token.value = newToken;
    token.value && localStorage.setItem('token', token.value);
  };
  const isAuthenticated = () => !!token.value;
  return {
    token,
    setToken,
    isAuthenticated,
    logout,
  };
});
