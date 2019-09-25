var BMCHSnippets = {
	"Constructor": {
		"prefix": "ctor",
		"body": [
			"/**",
			" *",
			" */",
			"constructor() {",
			"\tsuper();",
			"\t$0",
			"}"
		],
		"description": "Constructor"
	},
	"Class Definition": {
		"prefix": "class",
		"body": [
			"class ${1:name} {",
			"\tconstructor(${2:parameters}) {",
			"\t\t$0",
			"\t}",
			"}"
		],
		"description": "Class Definition"
	},
	"Public Method Definition": {
		"prefix": "public method",
		"body": [
			"/**",
			" * ${1:name}",
			" */",
			"public ${1:name}() {",
			"\t$0",
			"}"
		],
		"description": "Public Method Definition"
	},
	"Private Method Definition": {
		"prefix": "private method",
		"body": [
			"private ${1:name}() {",
			"\t$0",
			"}"
		],
		"description": "Private Method Definition"
	},
	"Property getter": {
		"prefix": "get",
		"body": [
			"",
			"public get ${1:value}() : ${2:string} {",
			"\t${3:return $0}",
			"}",
			""
		],
		"description": "Property getter"
	},
	"Define a full property": {
		"prefix": "prop",
		"body": [
			"",
			"private _${1:value} : ${2:string};",
			"public get ${1:value}() : ${2:string} {",
			"\treturn this._${1:value};",
			"}",
			"public set ${1:value}(v : ${2:string}) {",
			"\tthis._${1:value} = v;",
			"}",
			""
		],
		"description": "Define a full property"
	},
	"Triple-slash reference": {
		"prefix": "ref",
		"body": [
			"/// <reference path=\"$1\" />",
			"$0"
		],
		"description": "Triple-slash reference"
	},
	"Property setter": {
		"prefix": "set",
		"body": [
			"",
			"public set ${1:value}(v : ${2:string}) {",
			"\tthis.$3 = v;",
			"}",
			""
		],
		"description": "Property setter"
	},
	"Throw Exception": {
		"prefix": "throw",
		"body": [
			"throw \"$1\";",
			"$0"
		],
		"description": "Throw Exception"
	},
	"For Loop": {
		"prefix": "for",
		"body": [
			"for (let ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
			"\tconst ${3:element} = ${2:array}[${1:index}];",
			"\t$0",
			"}"
		],
		"description": "For Loop"
	},
	"For-Each Loop using =>": {
		"prefix": "foreach =>",
		"body": [
			"${1:array}.forEach(${2:element} => {",
			"\t$0",
			"});"
		],
		"description": "For-Each Loop using =>"
	},
	"For-In Loop": {
		"prefix": "forin",
		"body": [
			"for (const ${1:key} in ${2:object}) {",
			"\tif (${2:object}.hasOwnProperty(${1:key})) {",
			"\t\tconst ${3:element} = ${2:object}[${1:key}];",
			"\t\t$0",
			"\t}",
			"}"
		],
		"description": "For-In Loop"
	},
	"For-Of Loop": {
		"prefix": "forof",
		"body": [
			"for (const ${1:iterator} of ${2:object}) {",
			"\t$0",
			"}"
		],
		"description": "For-Of Loop"
	},
	"Function Statement": {
		"prefix": "function",
		"body": [
			"function ${1:name}(${2:params}:${3:type}) {",
			"\t$0",
			"}"
		],
		"description": "Function Statement"
	},
	"If Statement": {
		"prefix": "if",
		"body": [
			"if (${1:condition}) {",
			"\t$0",
			"}"
		],
		"description": "If Statement"
	},
	"If-Else Statement": {
		"prefix": "ifelse",
		"body": [
			"if (${1:condition}) {",
			"\t$0",
			"} else {",
			"\t",
			"}"
		],
		"description": "If-Else Statement"
	},
	"New Statement": {
		"prefix": "new",
		"body": [
			"const ${1:name} = new ${2:type}(${3:arguments});$0"
		],
		"description": "New Statement"
	},
	"Switch Statement": {
		"prefix": "switch",
		"body": [
			"switch (${1:key}) {",
			"\tcase ${2:value}:",
			"\t\t$0",
			"\t\tbreak;",
			"",
			"\tdefault:",
			"\t\tbreak;",
			"}"
		],
		"description": "Switch Statement"
	},
	"While Statement": {
		"prefix": "while",
		"body": [
			"while (${1:condition}) {",
			"\t$0",
			"}"
		],
		"description": "While Statement"
	},
	"Do-While Statement": {
		"prefix": "dowhile",
		"body": [
			"do {",
			"\t$0",
			"} while (${1:condition});"
		],
		"description": "Do-While Statement"
	},
	"Try-Catch Statement": {
		"prefix": "trycatch",
		"body": [
			"try {",
			"\t$0",
			"} catch (${1:error}) {",
			"\t",
			"}"
		],
		"description": "Try-Catch Statement"
	},
	"Region Start": {
		"prefix": "region",
		"body": [
			"//#region $0"
		],
		"description": "Folding Region Start"
	},
	"Region End": {
		"prefix": "endregion",
		"body": [
			"//#endregion"
		],
		"description": "Folding Region End"
	}
};