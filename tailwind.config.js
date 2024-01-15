/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    theme:{
        screens: {
            sm: '480px', // @media (min-width: 480px)
            md: '991px', // @media (min-width: 768px)
            lg: '1024px', //  @media (min-width: 1024px)
            xl: '1280px', //  @media (min-width: 1280px)
           '2xl': '1440px', // @media (min-width: 1536px)
        },

        colors: {
            white: '#FFFFFF',
            black: '#000000',
            meke: {
                100: '#F3797E',
                200: '#ED3405',
                300: '#EFF3FF',
                350: '#F5F8FA',
                400: '#DDE3FF',
                450: '#CBD4DE',
                500: '#CBE4FF40',
                550: '#85CBF8',
                600: '#17A1FA',
                700: '#2B53CF',
                800: '#7091EE',
                900: '#4456A4',
            },

            //background
            bg_primary: '#F5F8FA',
            bg_secondary: '#CBD4DE',
            bg_tertiary: '#EFF3FF',
            bg_additional: '#CBE4FF40',

            //text
            tx_primary: '#17A1FA',
            tx_secondary:'#000000',
            tx_tertiary:'#FFFFFF',
            tx_addtional:'#CBD4DE',
            tx_link:'#1270FD',

            //border
            br_primary: '#4456A4',
            br_secondary: '#DB0000',
            
            //button
            bt_primary: '#4456A4',
            bt_secondary: '#85CBF8',
            bt_tertiary: '#FF0000',
            bt_additional: '#00FF38',
        },
        extend: {
            //Typography
            fontFamily: {
                primary: ['Montserrat', 'sans-serif'],
                secondary: ['Nunito', 'sans-serfi'],
            },
            fontSize:{
                heading_1: '35px',
                heading_2: '20px',
                base: '16px',
                small: '14px',
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700,
              },
              // space
              spacing: {
                base: '1rem',
                small: '0.5rem',
                large: '2rem',
              },
              // border radius
              borderRadius: {
                small: '0.25rem',
                medium: '0.5rem',
                large: '1rem',
              },
              // transition time
             transitionDuration: {
                short: '0.15s ease',
                medium: '0.3s ease',
                long: '0.45s ease',
                timing_function: 'cubic-bezier(0.4, 0, 0.2, 1)',
             },
             blur: {
                150: '150px',
              },
        },
    },
    plugins: [],
}