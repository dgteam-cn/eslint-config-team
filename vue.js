module.exports = {
    extends: ['./index', './rules/vue'].map(require.resolve),
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        _: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
