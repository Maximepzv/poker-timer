import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.es2021,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			unicorn: eslintPluginUnicorn,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: {
			'unicorn/better-regex': 'error',
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];