const purgecss = require('@fullhuman/postcss-purgecss')({
    // paths to all templates in project
    content: [
        './src/**/*.tsx',
        './public/index.html'
    ],

    // any special characters,
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
}
