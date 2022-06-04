const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const webpackConfig = require("./webpack.config");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// noinspection JSCheckFunctionSignatures

mix.js("resources/js/app.js", "public/js")
    .extract()
    .vue(3)
    .postCss("resources/css/app.css", "public/css", [tailwindcss])
    .version()
    .webpackConfig(webpackConfig);