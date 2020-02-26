const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');
const theme = require('./theme')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme
    }),

    addDecoratorsLegacy()
);