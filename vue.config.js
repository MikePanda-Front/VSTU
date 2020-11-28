module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/variables.scss";
        `,
      },
    },
  },
}
