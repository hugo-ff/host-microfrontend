import { TFunction } from 'i18next';
// eslint-disable-next-line import/no-unresolved
import useSwitchMovieMFELanguage from 'movieMicrofrontend/hooks/useSwitchMovieMFELanguage';
// eslint-disable-next-line import/no-unresolved
import useSwitchTvShowMFELanguage from 'tvShowMicrofrontend/hooks/useSwitchTvShowMFELanguage';

import appInstance from '../i18n';

type SwitchLanguage = (languageId: string) => Promise<TFunction<'translation', undefined>>;

type SwitchLanguageFunctions = {
  switchAllLanguages: (languageCode: string) => Promise<void>;
};

const useSwitchLanguage = (): SwitchLanguageFunctions => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const switchMovieMFELanguageHook: SwitchLanguage = useSwitchMovieMFELanguage();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const switchTvShowMFELanguageHook: SwitchLanguage = useSwitchTvShowMFELanguage();

  const switchMovieMFELanguage = (languageCode: string) => switchMovieMFELanguageHook(languageCode);
  const switchTvShowMFELanguage = (languageCode: string) =>
    switchTvShowMFELanguageHook(languageCode);

  const switchAppLanguage = (languageCode: string) => appInstance.changeLanguage(languageCode);

  const switchAllLanguages = async (languageCode: string) => {
    await switchAppLanguage(languageCode);
    await switchMovieMFELanguage(languageCode);
    await switchTvShowMFELanguage(languageCode);
  };

  return {
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
