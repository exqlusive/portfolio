const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        },
        fontFamily: {
            'sans': ['Poppins', 'sans-serif'],
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
                'h2': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
                'h3': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
                'h4': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
                'h5': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
                'h6': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.Oxanium')},
            })
        })
    ],
}

//@import url('https://fonts.googleapis.com/css?family=Oxanium:400,500,600,700,800|Poppins:400,400i,500,500i,600,600i,700,700i&display=swap');
