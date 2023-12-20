import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import type { HostLocaleKeys } from '../locales/types';
import type { CustomTFunction } from '../types/types';

export const useHostTranslation = (): TFunction & CustomTFunction<HostLocaleKeys> => {
  const { t }: { t: TFunction & CustomTFunction<HostLocaleKeys> } = useTranslation();

  return t;
};
