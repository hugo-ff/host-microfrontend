import { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { mount } from 'tvshow/TvShowApp';

export const TvShowApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};
