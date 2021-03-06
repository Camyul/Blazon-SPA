SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'main': './js/main.js'
    },
    packages: {
        '/': {
            // remove '.js' from imports
            defaultExtension: 'js',
        },
    },
});
