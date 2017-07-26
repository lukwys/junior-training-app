module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.js',
            'src/**/*.js?(x)',
            'src/**/*.snap',
        ],
        tests: [
            'test/**/*.js',
            'test/**/*.test.js',
            'test/**/*.test.js?(x)'
        ],
        compilers: {
            "**/*.js": wallaby.compilers.babel()
        },
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest',
        debug: true
    };
};
