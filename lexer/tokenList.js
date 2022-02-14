const tokenList = {
  "PLUS" : (input) => input == '+',
  "MINUS" : (input) => input == '-',
  "DIVIDE" : (input) => input == '/',
  "MULTIPLY" : (input) => input == '*',
  "MODULO" : (input) => input == '%',

  "EQUALS" : (input) => input == '=',

  "GREATERTHAN" : (input) => input == '>',
  "LESSTHAN" : (input) => input == '<',
  "NOT" : (input) => input == '!',
  "GREATERTHANEQUAL" : (input) => input == '>=',
  "LESSTHANEQUAL" : (input) => input == '<=',
  "NOTEQUALTO" : (input) => input == '!=',
  "EQUALTO" : (input) => input == '==',

  "FATARROW" : (input) => input == '=>',

  "LPAREN" : (input) => input == '(',
  "RPAREN" : (input) => input == ')',
  "LBRACE" : (input) => input == '{',
  "RBRACE" : (input) => input == '}',

  "BAR" : (input) => input == '|',
  "COMMA" : (input) => input == ',',

  "SEMICOLON" : (input) => input ==';',
  "QUOTE" : (input) => input == "\"",
  "DOT" : (input) => input =='.',

  "USING" : (input) => input =='#',

  "NUMBER" : (input) => /^[0-9]+$/.test(input),
  "LETTER" : (input) => /^[a-zA-Z!?_:=]+$/.test(input),
  "WHITESPACE" : (input) => !/\S/.test(input),

  null : (input) => input ==/^\/\/.*/.test(input),
  null : (input) => input ==/^\/\*[\s\S]*?\*\//.test(input),

  "UNRECOGNIZED" : (input) => true,
};

const reserved = {
  "while" : 'WHILE',
  "print" : "SHOW",
  "println" : "SHOWLN",
  "get" : "GET",
  "if" : "IF",
  "else" : "ELSE",
  "method" : "FUNCTION",
  "var" : "DECLARATOR"
};

module.exports = {
  tokenList,
  reserved,
};