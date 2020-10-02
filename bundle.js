/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2)); // SINTAXE CURTA DE OBJETO\n\n/*\r\nconst nome = \"Edson\"\r\nconst idade = 38\r\n\r\nconst usuario = {\r\n    nome,\r\n    idade,\r\n    empresa: 'ENI'\r\n}\r\n\r\nconsole.log(usuario)*/\n// TEMPLATE LITTERS\n\n/*\r\nconst nome = \"Edson\"\r\nconst idade = 38\r\n\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade}`)*/\n// SPREAD\n\n/*\r\nconst usuario1 = {\r\n    nome: 'Edson',\r\n    idade: 38,\r\n    empresa: 'ENI'\r\n}\r\n\r\nconst usuario2 = { ...usuario1, nome: 'Carlos' }\r\n\r\nconsole.log(usuario2)\r\n*/\n\n/*\r\nconst arr1 = [1, 2, 3]\r\nconst arr2 = [4, 5, 6]\r\n\r\nconst arr3 = [...arr1, ...arr2]\r\n*/\n// REST\n\n/*\r\nfunction soma(a, b, ...params) {\r\n    return params\r\n}*/\n\n/*\r\nfunction soma(...params) {\r\n    return params.reduce((total, next) => total + next)\r\n}*/\n//console.log(arr3)\n\n/*\r\nconst arr = [1, 2, 3, 4]\r\n\r\nconst [a, ...c] = arr\r\n*/\n\n/*\r\nconst usuario = {\r\n    nome: 'Edson',\r\n    idade: 38,\r\n    empresa: 'ENI'\r\n}\r\n\r\nconst { nome, ...resto } = usuario\r\n*/\n\n/* DESESTRUTURAÇÃO */\n\n/*const usuario = {\r\n    nome: 'Edson',\r\n    idade: 38,\r\n    endereco: {\r\n        cidade: 'Nova Iguaçu',\r\n        estado: 'RJ',\r\n    }\r\n}*/\n//const { nome, idade, endereco: { cidade, estado } } = usuario\n// TAMBÉM EM FUNÇÃO\n//function mostraNome({ nome, idade }) {\n//console.log(nome, idade)\n//}\n//mostraNome(usuario)\n//console.log(nome, idade, cidade, estado)\n\n/* VALORES PADRÃO */\n\n/*const soma = (a = 3, b = 6) => a + b\r\nconsole.log(soma(2))*/\n\n/* Arrow Function */\n//const arr = [1, 3, 4, 5, 6]\n\n/*\r\nconst newArr = arr.map(item => {\r\n    return item * 2;\r\n})*/\n// retornando a um array\n//const teste = () => ['Maça', 'Melão', 'Uva']\n// retornando a um objeto (colocar chaves entre parênteses)\n//const teste = () => ({ nome: 'Edson Carlos' })\n//linha abaixo equivale a de cima\n//const newArr = arr.map(item => item * 2)\n//console.log(teste())\n\n/*\r\nconst arr = [1, 3, 4, 5, 8, 9]\r\n\r\nconst newArr = arr.map(function (item, index) {\r\n    return item + index;\r\n})\r\n\r\nconsole.log(newArr)\r\n\r\nconst sum = arr.reduce(function (total, next) {\r\n    return total + next\r\n})\r\n\r\nconsole.log(sum)\r\n\r\nconst filter = arr.filter(function (item) {\r\n    return item % 2 === 0\r\n})\r\n\r\nconsole.log(filter)\r\n\r\nconst find = arr.find(function (item) {\r\n    return item === 4\r\n})\r\n\r\nconsole.log(find)*/\n\n/* COM HERANÇA\r\nclass List {\r\n    constructor() {\r\n        this.data = []\r\n    }\r\n\r\n    add(data) {\r\n        this.data.push(data)\r\n        console.log(this.data)\r\n    }\r\n}\r\n\r\nclass TodoList extends List {\r\n    constructor() {\r\n        super()\r\n\r\n        this.usuario = 'Edson'\r\n    }\r\n\r\n    mostraUsuario() {\r\n        console.log(this.usuario)\r\n    }\r\n}\r\n\r\nconst MinhaLista = new TodoList()\r\n\r\ndocument.getElementById('novotodo').onclick = function () {\r\n    MinhaLista.add('Novo Todo')\r\n}\r\n\r\nMinhaLista.mostraUsuario()\r\n*/\n\n/*class TodoList {\r\n    constructor() {\r\n        this.todos = []\r\n    }\r\n\r\n    addTodos() {\r\n        this.todos.push('Novo todo')\r\n        console.log(this.todos)\r\n    }\r\n}\r\n\r\nconst MinhaLista = new TodoList();\r\n\r\ndocument.getElementById('novotodo').onclick = function () {\r\n    MinhaLista.addTodos();\r\n}*/\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });