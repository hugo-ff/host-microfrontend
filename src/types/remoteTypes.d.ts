///<reference types="react" />

declare module 'movie/Movie' {
  const movie: React.ComponentType;
  export default Movie;
}

declare module 'movie/hooks/useSwitchMovieMFELanguage' {
  const movie: React.ComponentType;
  export default useSwitchMovieMFELanguage;
}

declare module 'tvShow/TvShow' {
  const tvShow: React.ComponentType;
  export default TvShow;
}

declare module 'tvShow/hooks/useSwitchTvShowMFELanguage' {
  const tvShow: React.ComponentType;
  export default useSwitchTvShowMFELanguage;
}

declare module 'tvshow/TvShowApp' {
  export const mount: (el: HTMLElement) => void;
}
