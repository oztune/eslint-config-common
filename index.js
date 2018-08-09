module.exports = {
	"extends": "eslint:recommended",
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
			"version": "15.0"
		}
	},
	"parser": "babel-eslint",	
	"plugins": ["react"],
	"rules": {
		"indent": ["error", "tab"],
		"quotes": ["error", "single"],
		"linebreak-style": ["error", "unix"],
		"semi": ["error", "never"],
		"no-unused-vars": ["warn",
			{
				"vars": "all",
				"args": "none"
			}
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-undef": "error",
		"react/react-in-jsx-scope": "error",
		"react/no-deprecated": "error",
		"react/no-direct-mutation-state": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/require-render-return": "warn"
	}
}
