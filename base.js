module.exports = {
	"extends": ["eslint:recommended"],
	// This is inspired by:
	// - https://github.com/babel/babel-eslint/issues/663#issuecomment-519855344
	// - https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js#L55
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: 'module',
				ecmaFeatures: {
				  jsx: true,
				},
				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["@typescript-eslint"],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				'default-case': 'off',
				'no-dupe-class-members': 'off',
				'no-undef': 'off',
				'no-unused-vars': 'off'
			}
		}
	],
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module",
		"ecmaFeatures": {
			"impliedStrict": true,
			"jsx": true
		}
	},
	"settings": {
		"react": {
			"pragma": "React",
			"version": "16.0"
		}
	},
	"parser": "babel-eslint",	
	"plugins": ["react", "react-hooks"],
	"rules": {
		"indent": ["warn", "tab"],
		"quotes": ["error", "single"],
		"linebreak-style": ["error", "unix"],
		"semi": ["error", "never"],
		"no-unused-vars": ["warn",
			{
				"vars": "all",
				"args": "none"
			}
		],
		"no-console": ["error", {
			"allow": ["warn", "error"]
		}],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-undef": "error",
		"react/react-in-jsx-scope": "error",
		"react/no-deprecated": "error",
		"react/no-direct-mutation-state": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/require-render-return": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"no-restricted-imports": ["error", { "patterns": ["lodash$"] }]
		"no-restricted-syntax": [
			"error",
			{
				selector:
					"CallExpression[arguments.length=1] > MemberExpression.callee > Identifier.property[name='reduce']",
				message: "You must provide an initialValue to .reduce() to avoid catastrophic failure when the reduced array is empty.",
			},
		],
	}
}
