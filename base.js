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
			"version": "17.0"
		}
	},
	"parser": "babel-eslint",	
	"plugins": ["react", "react-hooks", "lodash"],
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
		"radix": ["error"],
		"react/jsx-uses-react": "off",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-undef": "error",
		"react/react-in-jsx-scope": "off",
		"react/no-deprecated": "error",
		"react/no-direct-mutation-state": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/require-render-return": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"lodash/import-scope": [2, "method"],
		"no-restricted-syntax": [
			"error",
			{
				//Inspired by https://github.com/eslint/eslint/issues/12868#issuecomment-581515841
				//In the future, if someone puts together an eslint rule for this, we should opt for that instead.
				selector:
					"CallExpression[arguments.length=1] > MemberExpression.callee > Identifier.property[name='reduce']",
				message: "You must provide an initialValue to .reduce() to avoid catastrophic failure when the reduced array is empty.",
			},
		],
	}
}
