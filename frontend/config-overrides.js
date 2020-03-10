const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackModuleRule, useBabelRc } = require('customize-cra');
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

    // addWebpackModuleRule({
    //     test: /\.svg$/,
    //     use: 'raw-loader'
    // }),

    addDecoratorsLegacy(),
    
    useBabelRc()
);