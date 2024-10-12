import * as process from 'process';

const config = {
  TYPESENSE_PORT: parseInt(process.env.TYPESENSE_PORT || "8108", 10),
  API_URL: process.env.API_URL,
  SERVER: process.env.SERVER,
  VUE_ROUTER_MODE: process.env.VUE_ROUTER_MODE,
  NODE_ENV: process.env.NODE_ENV,
  VUE_ROUTER_BASE: process.env.VUE_ROUTER_BASE,
  TYPESENSE_HOST: process.env.TYPESENSE_HOST || "0.0.0.0",
  TYPESENSE_API_KEY: process.env.TYPESENSE_API_KEY || "",
  TYPESENSE_PROTOCOL: process.env.TYPESENSE_PROTOCOL || "",
};

export default config;
