import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

const eslintConfig = [
    {
        ignores: ['.next', 'node_modules', 'public']
    },
    {
        files: ['**/*.{js,cjs,jsx}']
    },
    {
        ...reactPlugin.configs.flat.recommended,
    },
    {
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        rules: {
            'react/no-unknown-property': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-no-target-blank': 'off',
        },
    },
]

// console.log(eslintConfig)

export default eslintConfig