import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export const createI18nWithDefaultConfig = () => {
  return createI18n({
    locale: 'fa',
    messages,
    globalInjection: true,
    legacy: false,
  });
}
export default boot(({ app }) => {
  const i18n = createI18nWithDefaultConfig();
  // t('requiredRule')

  // Set i18n instance on app
  app.use(i18n);
});
