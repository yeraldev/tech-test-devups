// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: "stylesheets",
        link: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Open+Sans:wght@400;700&display=swap",
      },
    ],
  },
  css: ["@/public/css/main.css", "awesome-notifications/dist/style.css"],
});
