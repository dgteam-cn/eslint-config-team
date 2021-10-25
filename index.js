module.exports = {
    extends: ['./rules/base'].map(require.resolve),
    env: {
        es6: true,
        node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'script',
        // ecmaFeatures: {
        //     jsx: true,
        // }
    },
    root: true
}
