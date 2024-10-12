/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    API_URL: string;
    SERVER: string | undefined;
    TYPESENSE_HOST: string;
    TYPESENSE_PORT: string;
    TYPESENSE_PROTOCOL: string;
    TYPESENSE_API_KEY: string;
  }
}
