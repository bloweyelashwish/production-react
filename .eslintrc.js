module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			env: { node: true },
			files: [ '.eslintrc.{js,cjs}' ],
			parserOptions: { sourceType: 'script' },
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [ '@typescript-eslint', 'react', 'i18next' ],
	rules: {
		indent: [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'react/react-in-jsx-scope': 'off',
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: { multiline: true, minProperties: 3 },
				ObjectPattern: { multiline: true },
				ImportDeclaration: { multiline: true, minProperties: 3 },
				ExportDeclaration: { multiline: true, minProperties: 3 },
			},
		],
		'i18next/no-literal-string': [ 'error', { markupOnly: true } ],
	},
	globals: { __IS_DEV__: true },
};
