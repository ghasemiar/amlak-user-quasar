
import { reactive, ref, Ref, toRefs } from 'vue';
import { sendPhoneService, sendCodeService, registerUsername } from 'src/ composables/auth/auth.service';
import { useQuasar } from 'quasar';
import { useAuthStore } from 'stores/auth.store';
import { useRouter } from 'vue-router';

export const useSendPhone = () => {
  const items = reactive({loading:false,changeForm:false})
  const $q = useQuasar()
  const request = (values: any) => {
    items.loading = true;
    sendPhoneService(values)
      .then(async (res: any) => {
        items.loading = false;
        if (res.status == 200) {
          console.log(res)
          items.changeForm = true;
          console.log(res)
          $q.notify({
            message: res.data.msg,
            caption: 'مدت زمان اعتبار 2 دقیقه است',
            color: 'secondary'
          })
        }
      })
      .catch((error) => {
        items.loading = false;
        console.log(error);
      });
  };
  return { ...toRefs(items),request };
};
export const useSendCode = () => {
  const loading: Ref<boolean> = ref(false);
  const {setToken} = useAuthStore()
  const router = useRouter()
  const $q = useQuasar()
  const request = (values: any) => {
    loading.value = true;
    sendCodeService(values)
      .then(async (res: any) => {
        loading.value = false;
        if (res.status == 200) {
          console.log(res.data);
          setToken(res.data.token)
          $q.notify({
            message: 'خوش امدید',
            color: 'secondary'
          })
          router.push('/')
        }
      })
      .catch((error) => {
        loading.value = false;
        console.log(error);
      });
  };
  return { loading, request };
};
export const useRegisterUsername = () => {
  const loading: Ref<boolean> = ref(false);
  const {setToken} = useAuthStore()
  const router = useRouter()
  const $q = useQuasar()
  const request = async (values: any) => {
    loading.value = true;
    await registerUsername(values)
      .then((res: any) => {
        loading.value = false;
        if (res.status == 200) {
          setToken(res.data.token)
          $q.notify({
            message: 'خوش امدید',
            color: 'secondary'
          })
          router.push('/')
        }
      })
      .catch((error) => {
        loading.value = false;
        console.log(error);
      });
  };
  return { loading, request };
};
