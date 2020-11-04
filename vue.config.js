module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/variables.scss";
          @import "./src/scss/mixins.scss";
        `,
      },
    },
  },
}
