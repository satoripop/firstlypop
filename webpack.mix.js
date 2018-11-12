let mix = require('laravel-mix');

mix.browserSync({
    proxy: 'http://firstlypop.local/',
    notify: false,
    files: ["./assets/dist/css/*.css", "./assets/dist/js/*.js"]
});

mix.autoload({
    jquery: ['$', 'window.jQuery', "jQuery", "window.$", "jquery", "window.jquery"],
    'popper.js': ['Popper']
});

mix.setPublicPath('assets')
    .js('assets/js/app.js', 'assets/dist/js')
    .extract(['jquery', 'popper.js', 'bootstrap'])
    .sass('assets/sass/style.scss', 'assets/dist/css')
    .options({
        processCssUrls: false
    });

if (!mix.inProduction()) {
    mix.webpackConfig({
            devtool: 'source-map'
        })
        .sourceMaps()
}