let mix = require('laravel-mix');

// Path to dist folder
const DIST = 'assets';

// Proxy an existing virtual host (eg: 'myhost.dev', 'localhost/bootstrap-myhost').
// If null, use the built-in static server.
const PROXY = null;

mix.options({
        clearConsole: true,
        processCssUrls: false,
    })
    .setPublicPath('/')
    .copyDirectory('resources/images', 'assets/images')
    .sass('resources/scss/theme.scss', 'assets/css')
    .js('resources/js/theme.js', 'assets/js')
    .extract(['jquery', 'uikit'])
    .browserSync({
        server: PROXY === null,
        proxy: PROXY,
        files: [
            '*.{php|html|htm|js}',
            'layouts/*.htm',
            'partials/**/*.*',
            'pages/*.*',
            DIST + '/**/*',
            '*.*'
        ],
        injectChanges: true
    });