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
			"jsx": true,
			"experimentalObjectRestSpread": true
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
		"indent": [2, "tab"],
		"quotes": [2, "single"],
		"linebreak-style": [2, "unix"],
		"semi": [2, "never"],
		"no-unused-vars": [2,
			{
				"vars": "all",
				"args": "none"
			}
		],
		"react/jsx-uses-react": 2,
		"react/jsx-no-undef": 2,
		"react/react-in-jsx-scope": 2,
		"react/no-deprecated": 2,
		"react/no-direct-mutation-state": 2,
		"react/jsx-no-duplicate-props": 2
	}
}
