module.exports = {
	// We let prettier override rules that conflict with its config.
	// Ref: https://github.com/prettier/eslint-config-prettier#installation
	//
	// We need to put the real config in ./base so that prettier
	// configs can override it.
	"extends": ["./base", "prettier", "prettier/@typescript-eslint", "prettier/babel", "prettier/react"]
}
