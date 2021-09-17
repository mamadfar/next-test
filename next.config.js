const path = require('path')
// const withSass = require('@zeit/next-sass');

module.exports = {
  reactStrictMode: true,

  /**
   * @description using SCSS in project
   *
   * @first_package npm i sass
   *
   * @second_package npm i @zeit/next-sass
   */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
