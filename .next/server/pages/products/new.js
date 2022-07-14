(function() {
var exports = {};
exports.id = "pages/products/new";
exports.ids = ["pages/products/new"];
exports.modules = {

/***/ "./ethereum/build/MainChain.json":
/*!***************************************!*\
  !*** ./ethereum/build/MainChain.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"assembly":{".code":[{"begin":26,"end":355,"name":"PUSH","value":"80"},{"begin":26,"end":355,"name":"PUSH","value":"40"},{"begin":26,"end":355,"name":"MSTORE"},{"begin":26,"end":355,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":26,"end":355,"name":"POP"},{"begin":26,"end":355,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":355,"name":"DUP1"},{"begin":26,"end":355,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":355,"name":"PUSH","value":"0"},{"begin":26,"end":355,"name":"CODECOPY"},{"begin":26,"end":355,"name":"PUSH","value":"0"},{"begin":26,"end":355,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820e7db9a1dde9f66c6ef21d2539fc57dfedb6d095f401d67c5a5d2fde961b380220029",".code":[{"begin":26,"end":355,"name":"PUSH","value":"80"},{"begin":26,"end":355,"name":"PUSH","value":"40"},{"begin":26,"end":355,"name":"MSTORE"},{"begin":26,"end":355,"name":"PUSH","value":"4"},{"begin":26,"end":355,"name":"CALLDATASIZE"},{"begin":26,"end":355,"name":"LT"},{"begin":26,"end":355,"name":"PUSH [tag]","value":"1"},{"begin":26,"end":355,"name":"JUMPI"},{"begin":26,"end":355,"name":"PUSH","value":"FFFFFFFF"},{"begin":26,"end":355,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":355,"name":"PUSH","value":"0"},{"begin":26,"end":355,"name":"CALLDATALOAD"},{"begin":26,"end":355,"name":"DIV"},{"begin":26,"end":355,"name":"AND"},{"begin":26,"end":355,"name":"PUSH","value":"4444536F"},{"begin":26,"end":355,"name":"DUP2"},{"begin":26,"end":355,"name":"EQ"},{"begin":26,"end":355,"name":"PUSH [tag]","value":"2"},{"begin":26,"end":355,"name":"JUMPI"},{"begin":26,"end":355,"name":"DUP1"},{"begin":26,"end":355,"name":"PUSH","value":"4A6443C7"},{"begin":26,"end":355,"name":"EQ"},{"begin":26,"end":355,"name":"PUSH [tag]","value":"3"},{"begin":26,"end":355,"name":"JUMPI"},{"begin":26,"end":355,"name":"DUP1"},{"begin":26,"end":355,"name":"PUSH","value":"F6E2779A"},{"begin":26,"end":355,"name":"EQ"},{"begin":26,"end":355,"name":"PUSH [tag]","value":"4"},{"begin":26,"end":355,"name":"JUMPI"},{"begin":26,"end":355,"name":"tag","value":"1"},{"begin":26,"end":355,"name":"JUMPDEST"},{"begin":26,"end":355,"name":"PUSH","value":"0"},{"begin":26,"end":355,"name":"DUP1"},{"begin":26,"end":355,"name":"REVERT"},{"begin":88,"end":240,"name":"tag","value":"2"},{"begin":88,"end":240,"name":"JUMPDEST"},{"begin":88,"end":240,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"5"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"5"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":88,"end":240,"name":"PUSH [tag]","value":"6"},{"begin":88,"end":240,"name":"PUSH","value":"4"},{"begin":88,"end":240,"name":"CALLDATALOAD"},{"begin":88,"end":240,"name":"PUSH [tag]","value":"7"},{"begin":88,"end":240,"name":"JUMP"},{"begin":88,"end":240,"name":"tag","value":"6"},{"begin":88,"end":240,"name":"JUMPDEST"},{"begin":88,"end":240,"name":"STOP"},{"begin":51,"end":81,"name":"tag","value":"3"},{"begin":51,"end":81,"name":"JUMPDEST"},{"begin":51,"end":81,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"8"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"8"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":51,"end":81,"name":"PUSH [tag]","value":"9"},{"begin":51,"end":81,"name":"PUSH","value":"4"},{"begin":51,"end":81,"name":"CALLDATALOAD"},{"begin":51,"end":81,"name":"PUSH [tag]","value":"10"},{"begin":51,"end":81,"name":"JUMP"},{"begin":51,"end":81,"name":"tag","value":"9"},{"begin":51,"end":81,"name":"JUMPDEST"},{"begin":51,"end":81,"name":"PUSH","value":"40"},{"begin":51,"end":81,"name":"DUP1"},{"begin":51,"end":81,"name":"MLOAD"},{"begin":51,"end":81,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"SWAP3"},{"begin":51,"end":81,"name":"AND"},{"begin":51,"end":81,"name":"DUP3"},{"begin":51,"end":81,"name":"MSTORE"},{"begin":51,"end":81,"name":"MLOAD"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"DUP2"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"SUB"},{"begin":51,"end":81,"name":"PUSH","value":"20"},{"begin":51,"end":81,"name":"ADD"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"RETURN"},{"begin":246,"end":352,"name":"tag","value":"4"},{"begin":246,"end":352,"name":"JUMPDEST"},{"begin":246,"end":352,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"11"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"11"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"PUSH [tag]","value":"12"},{"begin":246,"end":352,"name":"PUSH [tag]","value":"13"},{"begin":246,"end":352,"name":"JUMP"},{"begin":246,"end":352,"name":"tag","value":"12"},{"begin":246,"end":352,"name":"JUMPDEST"},{"begin":246,"end":352,"name":"PUSH","value":"40"},{"begin":246,"end":352,"name":"DUP1"},{"begin":246,"end":352,"name":"MLOAD"},{"begin":246,"end":352,"name":"PUSH","value":"20"},{"begin":246,"end":352,"name":"DUP1"},{"begin":246,"end":352,"name":"DUP3"},{"begin":246,"end":352,"name":"MSTORE"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"MLOAD"},{"begin":246,"end":352,"name":"DUP2"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"ADD"},{"begin":246,"end":352,"name":"MSTORE"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"MLOAD"},{"begin":246,"end":352,"name":"SWAP2"},{"begin":246,"end":352,"name":"SWAP3"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"SWAP3"},{"begin":246,"end":352,"name":"SWAP1"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"ADD"},{"begin":246,"end":352,"name":"SWAP2"},{"begin":246,"end":352,"name":"DUP6"},{"begin":246,"end":352,"name":"DUP2"},{"begin":246,"end":352,"name":"ADD"},{"begin":246,"end":352,"name":"SWAP2"},{"begin":246,"end":352,"name":"MUL"},{"begin":246,"end":352,"name":"DUP1"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"DUP4"},{"begin":246,"end":352,"name":"PUSH","value":"0"},{"begin":8,"end":108,"name":"tag","value":"14"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":33,"end":36,"name":"DUP4"},{"begin":30,"end":31,"name":"DUP2"},{"begin":27,"end":37,"name":"LT"},{"begin":8,"end":108,"name":"ISZERO"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"15"},{"begin":8,"end":108,"name":"JUMPI"},{"begin":90,"end":101,"name":"DUP2"},{"begin":90,"end":101,"name":"DUP2"},{"begin":90,"end":101,"name":"ADD"},{"begin":84,"end":102,"name":"MLOAD"},{"begin":71,"end":82,"name":"DUP4"},{"begin":71,"end":82,"name":"DUP3"},{"begin":71,"end":82,"name":"ADD"},{"begin":64,"end":103,"name":"MSTORE"},{"begin":52,"end":54,"name":"PUSH","value":"20"},{"begin":45,"end":55,"name":"ADD"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"14"},{"begin":8,"end":108,"name":"JUMP"},{"begin":8,"end":108,"name":"tag","value":"15"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":12,"end":26,"name":"POP"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"SWAP1"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"ADD"},{"begin":246,"end":352,"name":"SWAP3"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"POP"},{"begin":246,"end":352,"name":"PUSH","value":"40"},{"begin":246,"end":352,"name":"MLOAD"},{"begin":246,"end":352,"name":"DUP1"},{"begin":246,"end":352,"name":"SWAP2"},{"begin":246,"end":352,"name":"SUB"},{"begin":246,"end":352,"name":"SWAP1"},{"begin":246,"end":352,"name":"RETURN"},{"begin":88,"end":240,"name":"tag","value":"7"},{"begin":88,"end":240,"name":"JUMPDEST"},{"begin":138,"end":154,"name":"PUSH","value":"0"},{"begin":175,"end":180,"name":"DUP2"},{"begin":181,"end":191,"name":"CALLER"},{"begin":165,"end":192,"name":"PUSH [tag]","value":"18"},{"begin":165,"end":192,"name":"PUSH [tag]","value":"19"},{"begin":165,"end":192,"name":"JUMP","value":"[in]"},{"begin":165,"end":192,"name":"tag","value":"18"},{"begin":165,"end":192,"name":"JUMPDEST"},{"begin":165,"end":192,"name":"SWAP2"},{"begin":165,"end":192,"name":"DUP3"},{"begin":165,"end":192,"name":"MSTORE"},{"begin":165,"end":192,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":165,"end":192,"name":"AND"},{"begin":165,"end":192,"name":"PUSH","value":"20"},{"begin":165,"end":192,"name":"DUP3"},{"begin":165,"end":192,"name":"ADD"},{"begin":165,"end":192,"name":"MSTORE"},{"begin":165,"end":192,"name":"PUSH","value":"40"},{"begin":165,"end":192,"name":"DUP1"},{"begin":165,"end":192,"name":"MLOAD"},{"begin":165,"end":192,"name":"SWAP2"},{"begin":165,"end":192,"name":"DUP3"},{"begin":165,"end":192,"name":"SWAP1"},{"begin":165,"end":192,"name":"SUB"},{"begin":165,"end":192,"name":"ADD"},{"begin":165,"end":192,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"PUSH","value":"0"},{"begin":165,"end":192,"name":"CREATE"},{"begin":165,"end":192,"name":"DUP1"},{"begin":165,"end":192,"name":"ISZERO"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"20"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":45,"end":61,"name":"RETURNDATASIZE"},{"begin":42,"end":43,"name":"PUSH","value":"0"},{"begin":39,"end":40,"name":"DUP1"},{"begin":24,"end":62,"name":"RETURNDATACOPY"},{"begin":77,"end":93,"name":"RETURNDATASIZE"},{"begin":74,"end":75,"name":"PUSH","value":"0"},{"begin":67,"end":94,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"20"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":204,"end":217,"name":"PUSH","value":"0"},{"begin":27,"end":37,"name":"DUP1"},{"begin":27,"end":37,"name":"SLOAD"},{"begin":39,"end":40,"name":"PUSH","value":"1"},{"begin":23,"end":41,"name":"DUP2"},{"begin":23,"end":41,"name":"ADD"},{"begin":45,"end":68,"name":"DUP3"},{"begin":45,"end":68,"name":"SSTORE"},{"begin":204,"end":232,"name":"SWAP1"},{"begin":204,"end":232,"name":"DUP1"},{"begin":204,"end":232,"name":"MSTORE"},{"begin":204,"end":232,"name":"PUSH","value":"290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563"},{"begin":204,"end":232,"name":"ADD"},{"begin":204,"end":232,"name":"DUP1"},{"begin":204,"end":232,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":204,"end":232,"name":"AND"},{"begin":204,"end":232,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":204,"end":232,"name":"SWAP3"},{"begin":204,"end":232,"name":"SWAP1"},{"begin":204,"end":232,"name":"SWAP3"},{"begin":204,"end":232,"name":"AND"},{"begin":204,"end":232,"name":"SWAP2"},{"begin":204,"end":232,"name":"SWAP1"},{"begin":204,"end":232,"name":"SWAP2"},{"begin":204,"end":232,"name":"OR"},{"begin":204,"end":232,"name":"SWAP1"},{"begin":204,"end":232,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":88,"end":240,"name":"JUMP","value":"[out]"},{"begin":51,"end":81,"name":"tag","value":"10"},{"begin":51,"end":81,"name":"JUMPDEST"},{"begin":51,"end":81,"name":"PUSH","value":"0"},{"begin":51,"end":81,"name":"DUP1"},{"begin":51,"end":81,"name":"SLOAD"},{"begin":51,"end":81,"name":"DUP3"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"DUP2"},{"begin":51,"end":81,"name":"LT"},{"begin":51,"end":81,"name":"PUSH [tag]","value":"22"},{"begin":51,"end":81,"name":"JUMPI"},{"begin":51,"end":81,"name":"INVALID"},{"begin":51,"end":81,"name":"tag","value":"22"},{"begin":51,"end":81,"name":"JUMPDEST"},{"begin":51,"end":81,"name":"PUSH","value":"0"},{"begin":51,"end":81,"name":"SWAP2"},{"begin":51,"end":81,"name":"DUP3"},{"begin":51,"end":81,"name":"MSTORE"},{"begin":51,"end":81,"name":"PUSH","value":"20"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":51,"end":81,"name":"SWAP2"},{"begin":51,"end":81,"name":"KECCAK256"},{"begin":51,"end":81,"name":"ADD"},{"begin":51,"end":81,"name":"SLOAD"},{"begin":51,"end":81,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":51,"end":81,"name":"AND"},{"begin":51,"end":81,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"POP"},{"begin":51,"end":81,"name":"DUP2"},{"begin":51,"end":81,"name":"JUMP","value":"[out]"},{"begin":246,"end":352,"name":"tag","value":"13"},{"begin":246,"end":352,"name":"JUMPDEST"},{"begin":295,"end":304,"name":"PUSH","value":"60"},{"begin":331,"end":344,"name":"PUSH","value":"0"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"SLOAD"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"MUL"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"PUSH","value":"40"},{"begin":324,"end":344,"name":"MLOAD"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"DUP2"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"PUSH","value":"40"},{"begin":324,"end":344,"name":"MSTORE"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"SWAP3"},{"begin":324,"end":344,"name":"SWAP2"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"DUP2"},{"begin":324,"end":344,"name":"DUP2"},{"begin":324,"end":344,"name":"MSTORE"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"DUP3"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"SLOAD"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"ISZERO"},{"begin":324,"end":344,"name":"PUSH [tag]","value":"25"},{"begin":324,"end":344,"name":"JUMPI"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"MUL"},{"begin":324,"end":344,"name":"DUP3"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"SWAP2"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"PUSH","value":"0"},{"begin":324,"end":344,"name":"MSTORE"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"PUSH","value":"0"},{"begin":324,"end":344,"name":"KECCAK256"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"tag","value":"26"},{"begin":324,"end":344,"name":"JUMPDEST"},{"begin":324,"end":344,"name":"DUP2"},{"begin":324,"end":344,"name":"SLOAD"},{"begin":324,"end":344,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":324,"end":344,"name":"AND"},{"begin":324,"end":344,"name":"DUP2"},{"begin":324,"end":344,"name":"MSTORE"},{"begin":324,"end":344,"name":"PUSH","value":"1"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"SWAP2"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"PUSH","value":"20"},{"begin":324,"end":344,"name":"ADD"},{"begin":324,"end":344,"name":"DUP1"},{"begin":324,"end":344,"name":"DUP4"},{"begin":324,"end":344,"name":"GT"},{"begin":324,"end":344,"name":"PUSH [tag]","value":"26"},{"begin":324,"end":344,"name":"JUMPI"},{"begin":324,"end":344,"name":"tag","value":"25"},{"begin":324,"end":344,"name":"JUMPDEST"},{"begin":324,"end":344,"name":"POP"},{"begin":324,"end":344,"name":"POP"},{"begin":324,"end":344,"name":"POP"},{"begin":324,"end":344,"name":"POP"},{"begin":324,"end":344,"name":"POP"},{"begin":324,"end":344,"name":"SWAP1"},{"begin":324,"end":344,"name":"POP"},{"begin":246,"end":352,"name":"SWAP1"},{"begin":246,"end":352,"name":"JUMP","value":"[out]"},{"begin":26,"end":355,"name":"tag","value":"19"},{"begin":26,"end":355,"name":"JUMPDEST"},{"begin":26,"end":355,"name":"PUSH","value":"40"},{"begin":26,"end":355,"name":"MLOAD"},{"begin":26,"end":355,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":355,"name":"DUP1"},{"begin":26,"end":355,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":26,"end":355,"name":"DUP4"},{"begin":26,"end":355,"name":"CODECOPY"},{"begin":26,"end":355,"name":"ADD"},{"begin":26,"end":355,"name":"SWAP1"},{"begin":26,"end":355,"name":"JUMP","value":"[out]"}],".data":{"0":{".code":[{"begin":357,"end":809,"name":"PUSH","value":"80"},{"begin":357,"end":809,"name":"PUSH","value":"40"},{"begin":357,"end":809,"name":"MSTORE"},{"begin":570,"end":682,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":570,"end":682,"name":"POP"},{"begin":570,"end":682,"name":"PUSH","value":"40"},{"begin":570,"end":682,"name":"MLOAD"},{"begin":570,"end":682,"name":"PUSH","value":"40"},{"begin":570,"end":682,"name":"DUP1"},{"begin":570,"end":682,"name":"PUSHSIZE"},{"begin":570,"end":682,"name":"DUP4"},{"begin":570,"end":682,"name":"CODECOPY"},{"begin":570,"end":682,"name":"DUP2"},{"begin":570,"end":682,"name":"ADD"},{"begin":570,"end":682,"name":"PUSH","value":"40"},{"begin":570,"end":682,"name":"MSTORE"},{"begin":570,"end":682,"name":"DUP1"},{"begin":570,"end":682,"name":"MLOAD"},{"begin":570,"end":682,"name":"PUSH","value":"20"},{"begin":570,"end":682,"name":"SWAP1"},{"begin":570,"end":682,"name":"SWAP2"},{"begin":570,"end":682,"name":"ADD"},{"begin":570,"end":682,"name":"MLOAD"},{"begin":627,"end":634,"name":"PUSH","value":"0"},{"begin":627,"end":642,"name":"DUP1"},{"begin":627,"end":642,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":627,"end":642,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":627,"end":642,"name":"SWAP1"},{"begin":627,"end":642,"name":"SWAP3"},{"begin":627,"end":642,"name":"AND"},{"begin":627,"end":642,"name":"SWAP2"},{"begin":627,"end":642,"name":"SWAP1"},{"begin":627,"end":642,"name":"SWAP2"},{"begin":627,"end":642,"name":"OR"},{"begin":627,"end":642,"name":"DUP2"},{"begin":627,"end":642,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":653,"end":674,"name":"SWAP2"},{"begin":653,"end":674,"name":"SWAP1"},{"begin":653,"end":674,"name":"SWAP2"},{"begin":653,"end":674,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1A5"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"DUP2"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":357,"end":809,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":357,"end":809,"name":"SWAP1"},{"begin":357,"end":809,"name":"CODECOPY"},{"begin":357,"end":809,"name":"PUSH","value":"0"},{"begin":357,"end":809,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820d298eb0f36d37f018e5e37f4eccfae78be7d4deb2b3ccde65c8e59d5d714712c0029",".code":[{"begin":357,"end":809,"name":"PUSH","value":"80"},{"begin":357,"end":809,"name":"PUSH","value":"40"},{"begin":357,"end":809,"name":"MSTORE"},{"begin":357,"end":809,"name":"PUSH","value":"4"},{"begin":357,"end":809,"name":"CALLDATASIZE"},{"begin":357,"end":809,"name":"LT"},{"begin":357,"end":809,"name":"PUSH [tag]","value":"1"},{"begin":357,"end":809,"name":"JUMPI"},{"begin":357,"end":809,"name":"PUSH","value":"FFFFFFFF"},{"begin":357,"end":809,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":357,"end":809,"name":"PUSH","value":"0"},{"begin":357,"end":809,"name":"CALLDATALOAD"},{"begin":357,"end":809,"name":"DIV"},{"begin":357,"end":809,"name":"AND"},{"begin":357,"end":809,"name":"PUSH","value":"481C6A75"},{"begin":357,"end":809,"name":"DUP2"},{"begin":357,"end":809,"name":"EQ"},{"begin":357,"end":809,"name":"PUSH [tag]","value":"2"},{"begin":357,"end":809,"name":"JUMPI"},{"begin":357,"end":809,"name":"DUP1"},{"begin":357,"end":809,"name":"PUSH","value":"97A993AA"},{"begin":357,"end":809,"name":"EQ"},{"begin":357,"end":809,"name":"PUSH [tag]","value":"3"},{"begin":357,"end":809,"name":"JUMPI"},{"begin":357,"end":809,"name":"DUP1"},{"begin":357,"end":809,"name":"PUSH","value":"A6F2AE3A"},{"begin":357,"end":809,"name":"EQ"},{"begin":357,"end":809,"name":"PUSH [tag]","value":"4"},{"begin":357,"end":809,"name":"JUMPI"},{"begin":357,"end":809,"name":"DUP1"},{"begin":357,"end":809,"name":"PUSH","value":"CE592954"},{"begin":357,"end":809,"name":"EQ"},{"begin":357,"end":809,"name":"PUSH [tag]","value":"5"},{"begin":357,"end":809,"name":"JUMPI"},{"begin":357,"end":809,"name":"tag","value":"1"},{"begin":357,"end":809,"name":"JUMPDEST"},{"begin":357,"end":809,"name":"PUSH","value":"0"},{"begin":357,"end":809,"name":"DUP1"},{"begin":357,"end":809,"name":"REVERT"},{"begin":378,"end":400,"name":"tag","value":"2"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"6"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"6"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"POP"},{"begin":378,"end":400,"name":"PUSH [tag]","value":"7"},{"begin":378,"end":400,"name":"PUSH [tag]","value":"8"},{"begin":378,"end":400,"name":"JUMP"},{"begin":378,"end":400,"name":"tag","value":"7"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"PUSH","value":"40"},{"begin":378,"end":400,"name":"DUP1"},{"begin":378,"end":400,"name":"MLOAD"},{"begin":378,"end":400,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"SWAP3"},{"begin":378,"end":400,"name":"AND"},{"begin":378,"end":400,"name":"DUP3"},{"begin":378,"end":400,"name":"MSTORE"},{"begin":378,"end":400,"name":"MLOAD"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"DUP2"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"SUB"},{"begin":378,"end":400,"name":"PUSH","value":"20"},{"begin":378,"end":400,"name":"ADD"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"RETURN"},{"begin":439,"end":475,"name":"tag","value":"3"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"9"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"9"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":439,"end":475,"name":"PUSH [tag]","value":"10"},{"begin":439,"end":475,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":439,"end":475,"name":"PUSH","value":"4"},{"begin":439,"end":475,"name":"CALLDATALOAD"},{"begin":439,"end":475,"name":"AND"},{"begin":439,"end":475,"name":"PUSH [tag]","value":"11"},{"begin":439,"end":475,"name":"JUMP"},{"begin":439,"end":475,"name":"tag","value":"10"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"PUSH","value":"40"},{"begin":439,"end":475,"name":"DUP1"},{"begin":439,"end":475,"name":"MLOAD"},{"begin":439,"end":475,"name":"SWAP2"},{"begin":439,"end":475,"name":"ISZERO"},{"begin":439,"end":475,"name":"ISZERO"},{"begin":439,"end":475,"name":"DUP3"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"MLOAD"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"SUB"},{"begin":439,"end":475,"name":"PUSH","value":"20"},{"begin":439,"end":475,"name":"ADD"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"RETURN"},{"begin":688,"end":806,"name":"tag","value":"4"},{"begin":688,"end":806,"name":"JUMPDEST"},{"begin":688,"end":806,"name":"PUSH [tag]","value":"12"},{"begin":688,"end":806,"name":"PUSH [tag]","value":"13"},{"begin":688,"end":806,"name":"JUMP"},{"begin":688,"end":806,"name":"tag","value":"12"},{"begin":688,"end":806,"name":"JUMPDEST"},{"begin":688,"end":806,"name":"STOP"},{"begin":407,"end":432,"name":"tag","value":"5"},{"begin":407,"end":432,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"14"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"14"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"POP"},{"begin":407,"end":432,"name":"PUSH [tag]","value":"15"},{"begin":407,"end":432,"name":"PUSH [tag]","value":"16"},{"begin":407,"end":432,"name":"JUMP"},{"begin":407,"end":432,"name":"tag","value":"15"},{"begin":407,"end":432,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"PUSH","value":"40"},{"begin":407,"end":432,"name":"DUP1"},{"begin":407,"end":432,"name":"MLOAD"},{"begin":407,"end":432,"name":"SWAP2"},{"begin":407,"end":432,"name":"DUP3"},{"begin":407,"end":432,"name":"MSTORE"},{"begin":407,"end":432,"name":"MLOAD"},{"begin":407,"end":432,"name":"SWAP1"},{"begin":407,"end":432,"name":"DUP2"},{"begin":407,"end":432,"name":"SWAP1"},{"begin":407,"end":432,"name":"SUB"},{"begin":407,"end":432,"name":"PUSH","value":"20"},{"begin":407,"end":432,"name":"ADD"},{"begin":407,"end":432,"name":"SWAP1"},{"begin":407,"end":432,"name":"RETURN"},{"begin":378,"end":400,"name":"tag","value":"8"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"PUSH","value":"0"},{"begin":378,"end":400,"name":"SLOAD"},{"begin":378,"end":400,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":378,"end":400,"name":"AND"},{"begin":378,"end":400,"name":"DUP2"},{"begin":378,"end":400,"name":"JUMP","value":"[out]"},{"begin":439,"end":475,"name":"tag","value":"11"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"PUSH","value":"2"},{"begin":439,"end":475,"name":"PUSH","value":"20"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"PUSH","value":"0"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"PUSH","value":"40"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"KECCAK256"},{"begin":439,"end":475,"name":"SLOAD"},{"begin":439,"end":475,"name":"PUSH","value":"FF"},{"begin":439,"end":475,"name":"AND"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"JUMP","value":"[out]"},{"begin":688,"end":806,"name":"tag","value":"13"},{"begin":688,"end":806,"name":"JUMPDEST"},{"begin":750,"end":763,"name":"PUSH","value":"1"},{"begin":750,"end":763,"name":"SLOAD"},{"begin":737,"end":746,"name":"CALLVALUE"},{"begin":737,"end":763,"name":"LT"},{"begin":737,"end":763,"name":"ISZERO"},{"begin":729,"end":764,"name":"PUSH [tag]","value":"18"},{"begin":729,"end":764,"name":"JUMPI"},{"begin":729,"end":764,"name":"PUSH","value":"0"},{"begin":729,"end":764,"name":"DUP1"},{"begin":729,"end":764,"name":"REVERT"},{"begin":729,"end":764,"name":"tag","value":"18"},{"begin":729,"end":764,"name":"JUMPDEST"},{"begin":782,"end":792,"name":"CALLER"},{"begin":775,"end":793,"name":"PUSH","value":"0"},{"begin":775,"end":793,"name":"SWAP1"},{"begin":775,"end":793,"name":"DUP2"},{"begin":775,"end":793,"name":"MSTORE"},{"begin":775,"end":781,"name":"PUSH","value":"2"},{"begin":775,"end":793,"name":"PUSH","value":"20"},{"begin":775,"end":793,"name":"MSTORE"},{"begin":775,"end":793,"name":"PUSH","value":"40"},{"begin":775,"end":793,"name":"SWAP1"},{"begin":775,"end":793,"name":"KECCAK256"},{"begin":775,"end":798,"name":"DUP1"},{"begin":775,"end":798,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":775,"end":798,"name":"AND"},{"begin":794,"end":798,"name":"PUSH","value":"1"},{"begin":775,"end":798,"name":"OR"},{"begin":775,"end":798,"name":"SWAP1"},{"begin":775,"end":798,"name":"SSTORE"},{"begin":688,"end":806,"name":"JUMP","value":"[out]"},{"begin":407,"end":432,"name":"tag","value":"16"},{"begin":407,"end":432,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"PUSH","value":"1"},{"begin":407,"end":432,"name":"SLOAD"},{"begin":407,"end":432,"name":"DUP2"},{"begin":407,"end":432,"name":"JUMP","value":"[out]"}]}}}}}}},"bytecode":"608060405234801561001057600080fd5b506104b1806100206000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634444536f811461005b5780634a6443c714610075578063f6e2779a146100b6575b600080fd5b34801561006757600080fd5b5061007360043561011b565b005b34801561008157600080fd5b5061008d6004356101d0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c257600080fd5b506100cb610205565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101075781810151838201526020016100ef565b505050509050019250505060405180910390f35b60008133610127610274565b91825273ffffffffffffffffffffffffffffffffffffffff166020820152604080519182900301906000f080158015610164573d6000803e3d6000fd5b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff929092169190911790555050565b60008054829081106101de57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6060600080548060200260200160405190810160405280929190818152602001828054801561026a57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161023f575b5050505050905090565b60405161020180610285833901905600608060405234801561001057600080fd5b5060405160408061020183398101604052805160209091015160008054600160a060020a03909216600160a060020a03199092169190911790556001556101a58061005c6000396000f3006080604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663481c6a75811461006657806397a993aa146100a4578063a6f2ae3a146100e6578063ce592954146100f0575b600080fd5b34801561007257600080fd5b5061007b610117565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100b057600080fd5b506100d273ffffffffffffffffffffffffffffffffffffffff60043516610133565b604080519115158252519081900360200190f35b6100ee610148565b005b3480156100fc57600080fd5b50610105610173565b60408051918252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60015434101561015757600080fd5b336000908152600260205260409020805460ff19166001179055565b600154815600a165627a7a72305820d298eb0f36d37f018e5e37f4eccfae78be7d4deb2b3ccde65c8e59d5d714712c0029a165627a7a72305820e7db9a1dde9f66c6ef21d2539fc57dfedb6d095f401d67c5a5d2fde961b380220029","functionHashes":{"createChain(uint256)":"4444536f","deployedChain(uint256)":"4a6443c7","getDeployedChains()":"f6e2779a"},"gasEstimates":{"creation":[281,240200],"external":{"createChain(uint256)":null,"deployedChain(uint256)":721,"getDeployedChains()":null},"internal":{}},"interface":"[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createChain\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedChain\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedChains\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}]","metadata":"{\\"compiler\\":{\\"version\\":\\"0.4.26+commit.4563c3fc\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createChain\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedChain\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedChains\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"\\":\\"MainChain\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"\\":{\\"keccak256\\":\\"0x548030b8d78880a174ea3b27602767a45563bdfe68d930bf33944a0fec7ff8c5\\",\\"urls\\":[\\"bzzr://4a0470b96d037443745d12d2953d99537ad316f68cd0b96468fa921ec711cf44\\"]}},\\"version\\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x4B1 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x56 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x4444536F DUP2 EQ PUSH2 0x5B JUMPI DUP1 PUSH4 0x4A6443C7 EQ PUSH2 0x75 JUMPI DUP1 PUSH4 0xF6E2779A EQ PUSH2 0xB6 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x67 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x73 PUSH1 0x4 CALLDATALOAD PUSH2 0x11B JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x81 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8D PUSH1 0x4 CALLDATALOAD PUSH2 0x1D0 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xC2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xCB PUSH2 0x205 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 DUP2 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x107 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xEF JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP2 CALLER PUSH2 0x127 PUSH2 0x274 JUMP JUMPDEST SWAP2 DUP3 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 SWAP1 SUB ADD SWAP1 PUSH1 0x0 CREATE DUP1 ISZERO DUP1 ISZERO PUSH2 0x164 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP3 SSTORE SWAP1 DUP1 MSTORE PUSH32 0x290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP3 SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x1DE JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x26A JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x23F JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x201 DUP1 PUSH2 0x285 DUP4 CODECOPY ADD SWAP1 JUMP STOP PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x201 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x1 SSTORE PUSH2 0x1A5 DUP1 PUSH2 0x5C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x61 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x481C6A75 DUP2 EQ PUSH2 0x66 JUMPI DUP1 PUSH4 0x97A993AA EQ PUSH2 0xA4 JUMPI DUP1 PUSH4 0xA6F2AE3A EQ PUSH2 0xE6 JUMPI DUP1 PUSH4 0xCE592954 EQ PUSH2 0xF0 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x72 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x7B PUSH2 0x117 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xD2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x4 CALLDATALOAD AND PUSH2 0x133 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0xEE PUSH2 0x148 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xFC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x105 PUSH2 0x173 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLVALUE LT ISZERO PUSH2 0x157 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xd2 SWAP9 0xeb 0xf CALLDATASIZE 0xd3 PUSH32 0x18E5E37F4ECCFAE78BE7D4DEB2B3CCDE65C8E59D5D714712C0029A165627A7A PUSH19 0x305820E7DB9A1DDE9F66C6EF21D2539FC57DFE 0xdb PUSH14 0x95F401D67C5A5D2FDE961B38022 STOP 0x29 ","runtimeBytecode":"6080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634444536f811461005b5780634a6443c714610075578063f6e2779a146100b6575b600080fd5b34801561006757600080fd5b5061007360043561011b565b005b34801561008157600080fd5b5061008d6004356101d0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c257600080fd5b506100cb610205565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101075781810151838201526020016100ef565b505050509050019250505060405180910390f35b60008133610127610274565b91825273ffffffffffffffffffffffffffffffffffffffff166020820152604080519182900301906000f080158015610164573d6000803e3d6000fd5b50600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff929092169190911790555050565b60008054829081106101de57fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6060600080548060200260200160405190810160405280929190818152602001828054801561026a57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161023f575b5050505050905090565b60405161020180610285833901905600608060405234801561001057600080fd5b5060405160408061020183398101604052805160209091015160008054600160a060020a03909216600160a060020a03199092169190911790556001556101a58061005c6000396000f3006080604052600436106100615763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663481c6a75811461006657806397a993aa146100a4578063a6f2ae3a146100e6578063ce592954146100f0575b600080fd5b34801561007257600080fd5b5061007b610117565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100b057600080fd5b506100d273ffffffffffffffffffffffffffffffffffffffff60043516610133565b604080519115158252519081900360200190f35b6100ee610148565b005b3480156100fc57600080fd5b50610105610173565b60408051918252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60015434101561015757600080fd5b336000908152600260205260409020805460ff19166001179055565b600154815600a165627a7a72305820d298eb0f36d37f018e5e37f4eccfae78be7d4deb2b3ccde65c8e59d5d714712c0029a165627a7a72305820e7db9a1dde9f66c6ef21d2539fc57dfedb6d095f401d67c5a5d2fde961b380220029","srcmap":"26:329:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:329:0;;;;;;;","srcmapRuntime":"26:329:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;88:152;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;88:152:0;;;;;;;51:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;51:30:0;;;;;;;;;;;;;;;;;;;;;;;;246:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;246:106:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;246:106:0;;;;;;;;;;;;;;;;;88:152;138:16;175:5;181:10;165:27;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;165:27:0;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;204:13:0;27:10:-1;;39:1;23:18;;45:23;;204:28:0;;;;;;;-1:-1:-1;;204:28:0;;;;;;;;;;;;-1:-1:-1;;88:152:0:o;51:30::-;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;51:30:0;:::o;246:106::-;295:9;331:13;324:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;246:106;:::o;26:329::-;;;;;;;;;;:::o"}');

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\Header.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // import { Link } from '../routes';

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    style: {
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, " ", __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 27
    }
  }, "BuyIt"), " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
    position: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "  ", __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 26
    }
  }, "Products"), " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, " ", __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, "+"), " ")));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("link", {
    async: true,
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), props.children);
});

/***/ }),

/***/ "./ethereum/main.js":
/*!**************************!*\
  !*** ./ethereum/main.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_MainChain_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/MainChain.json */ "./ethereum/build/MainChain.json");


const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__.default.eth.Contract(JSON.parse(_build_MainChain_json__WEBPACK_IMPORTED_MODULE_1__.interface), '0xf6420B5f897C611aC7955Cb31A53ec92C2BEfeff');
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  //on the server or user doesn't have metamask
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)( //providing our provider
  "https://rinkeby.infura.io/v3/a50273c548074e82b4b1e77976f16a5f");
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/products/new.js":
/*!*******************************!*\
  !*** ./pages/products/new.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/main */ "./ethereum/main.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\new.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ChainNew extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      price: ''
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
      await _ethereum_main__WEBPACK_IMPORTED_MODULE_3__.default.methods.createChain(this.state.price).send({
        from: accounts[0]
      });
    });
  }

  render() {
    return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 14
      }
    }, "Create a New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, "Price"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
      label: "wei",
      labelPosition: "right",
      value: this.state.price,
      onChange: event => this.setState({
        price: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      primary: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, "Create!")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChainNew);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/products/new.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9ldGhlcmV1bS9tYWluLmpzIiwid2VicGFjazovL2NoYWluMi8uL2V0aGVyZXVtL3dlYjMuanMiLCJ3ZWJwYWNrOi8vY2hhaW4yLy4vcGFnZXMvcHJvZHVjdHMvbmV3LmpzIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsImluc3RhbmNlIiwid2ViMyIsIkpTT04iLCJwYXJzZSIsIk1haW5DaGFpbiIsInByb3ZpZGVyIiwiV2ViMyIsIkNoYWluTmV3IiwiQ29tcG9uZW50IiwicHJpY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJtYWluIiwic3RhdGUiLCJzZW5kIiwiZnJvbSIsInJlbmRlciIsIm9uU3VibWl0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUEsK0RBQWMsTUFBSTtBQUNkLFNBQ0ksTUFBQyxtREFBRDtBQUFNLFNBQUssRUFBRTtBQUFDQSxlQUFTLEVBQUU7QUFBWixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHTSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBWTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWixNQUhOLEVBTUksTUFBQyx3REFBRDtBQUFXLFlBQVEsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWE7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFiLE1BRkEsRUFNSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBWTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWixNQU5KLENBTkosQ0FESjtBQWtCSCxDQW5CRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLCtEQUFlQyxLQUFLLElBQUc7QUFDbkIsU0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUNJLFNBQUssTUFEVDtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBR0ksUUFBSSxFQUFDLGtFQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURKLEVBUUksTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTS0EsS0FBSyxDQUFDQyxRQVRYLENBREo7QUFhSCxDQWRELEU7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyx1REFBSixDQUNiQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsNERBQVgsQ0FEYSxFQUViLDRDQUZhLENBQWpCO0FBSUEsK0RBQWVKLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBLElBQUlDLElBQUo7O0FBRUEsSUFBRyxLQUFILEVBQXNFLEVBQXRFLE1BSU07QUFDRjtBQUNBLFFBQU1JLFFBQVEsR0FBRyxJQUFJQyxvRUFBSixFQUFpQztBQUM5QyxpRUFEYSxDQUFqQjtBQUdBTCxNQUFJLEdBQUcsSUFBSUssNkNBQUosQ0FBU0QsUUFBVCxDQUFQO0FBQ0g7O0FBQ0QsK0RBQWVKLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTSxRQUFOLFNBQXVCQyw0Q0FBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLG1DQUNyQjtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQURxQjs7QUFBQSxzQ0FJbEIsTUFBTUMsS0FBTixJQUFjO0FBQ3JCQSxXQUFLLENBQUNDLGNBQU47QUFFQSxZQUFNQyxRQUFRLEdBQUUsTUFBTVgsbUVBQUEsRUFBdEI7QUFDQSxZQUFNWSx1RUFBQSxDQUF5QixLQUFLQyxLQUFMLENBQVdMLEtBQXBDLEVBQTJDTSxJQUEzQyxDQUFnRDtBQUNsREMsWUFBSSxFQUFDSixRQUFRLENBQUMsQ0FBRDtBQURxQyxPQUFoRCxDQUFOO0FBR0gsS0FYNEI7QUFBQTs7QUFZN0JLLFFBQU0sR0FBRTtBQUNKLFdBQ0EsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFETCxFQUVLLE1BQUMsbURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJLE1BQUMsb0RBQUQ7QUFBTyxXQUFLLEVBQUMsS0FBYjtBQUNDLG1CQUFhLEVBQUMsT0FEZjtBQUVDLFdBQUssRUFBRSxLQUFLSixLQUFMLENBQVdMLEtBRm5CO0FBR0MsY0FBUSxFQUFFQyxLQUFLLElBQUcsS0FBS1MsUUFBTCxDQUFjO0FBQUNWLGFBQUssRUFBQ0MsS0FBSyxDQUFDVSxNQUFOLENBQWFDO0FBQXBCLE9BQWQsQ0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREgsRUFTRyxNQUFDLHFEQUFEO0FBQVEsYUFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEgsQ0FGTCxDQURBO0FBZUY7O0FBNUIyQjs7QUE4QmpDLCtEQUFlZCxRQUFmLEU7Ozs7Ozs7Ozs7O0FDcENBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzL25ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxNZW51IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fT5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TGluayByb3V0ZT1cIi9cIj4gKi99XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbT4gPGEgY2xhc3NOYW1lPVwiaXRlbVwiPkJ1eUl0PC9hPiA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG5cclxuICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayByb3V0ZT1cIi9cIj4gKi99XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0+ICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+UHJvZHVjdHM8L2E+IDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj4gKi99XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPiA8YSBjbGFzc05hbWU9XCJpdGVtXCI+KzwvYT4gPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgYXN5bmNcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSIsImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XHJcbmltcG9ydCBNYWluQ2hhaW4gZnJvbSAnLi9idWlsZC9NYWluQ2hhaW4uanNvbic7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgIEpTT04ucGFyc2UoTWFpbkNoYWluLmludGVyZmFjZSksXHJcbiAgICAnMHhmNjQyMEI1Zjg5N0M2MTFhQzc5NTVDYjMxQTUzZWM5MkMyQkVmZWZmJ1xyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcblxyXG5sZXQgd2ViMztcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyE9PSAndW5kZWZpbmVkJyl7IC8vIHJ1bm5pbmcgaW4gYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgYXZhaWxhYmxlXHJcblxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcblxyXG59IGVsc2V7XHJcbiAgICAvL29uIHRoZSBzZXJ2ZXIgb3IgdXNlciBkb2Vzbid0IGhhdmUgbWV0YW1hc2tcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlciggLy9wcm92aWRpbmcgb3VyIHByb3ZpZGVyXHJcbiAgICAgICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzL2E1MDI3M2M1NDgwNzRlODJiNGIxZTc3OTc2ZjE2YTVmXCJcclxuICAgICk7XHJcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qcydcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4uLy4uL2V0aGVyZXVtL21haW4nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcbmNsYXNzIENoYWluTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHByaWNlOiAnJ1xyXG4gICAgfTtcclxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHM9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgbWFpbi5tZXRob2RzLmNyZWF0ZUNoYWluKHRoaXMuc3RhdGUucHJpY2UpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOmFjY291bnRzWzBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgPGgzPkNyZWF0ZSBhIE5ldyBQcm9kdWN0PC9oMz5cclxuICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHRoaXMuc2V0U3RhdGUoe3ByaWNlOmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkNyZWF0ZSE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICl9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5OZXc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=