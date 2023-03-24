import AWN from "awesome-notifications";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  return { provide: { awn: new AWN() } };
});
