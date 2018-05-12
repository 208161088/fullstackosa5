module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": 0,
		"globals": {
			"test": true,
			"expect": true,
			"describe": true
		},
	  "eqeqeq": "error",
	  "no-trailing-spaces": "error",
	  "arrow-spacing": [
		  "error", { "before": true, "after": true }
	  ]
    }
};