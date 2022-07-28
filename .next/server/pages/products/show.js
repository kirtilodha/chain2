(function() {
var exports = {};
exports.id = "pages/products/show";
exports.ids = ["pages/products/show"];
exports.modules = {

/***/ "./ethereum/build/Chain.json":
/*!***********************************!*\
  !*** ./ethereum/build/Chain.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"assembly":{".code":[{"begin":357,"end":1048,"name":"PUSH","value":"80"},{"begin":357,"end":1048,"name":"PUSH","value":"40"},{"begin":357,"end":1048,"name":"MSTORE"},{"begin":599,"end":711,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":599,"end":711,"name":"POP"},{"begin":599,"end":711,"name":"PUSH","value":"40"},{"begin":599,"end":711,"name":"MLOAD"},{"begin":599,"end":711,"name":"PUSH","value":"40"},{"begin":599,"end":711,"name":"DUP1"},{"begin":599,"end":711,"name":"PUSHSIZE"},{"begin":599,"end":711,"name":"DUP4"},{"begin":599,"end":711,"name":"CODECOPY"},{"begin":599,"end":711,"name":"DUP2"},{"begin":599,"end":711,"name":"ADD"},{"begin":599,"end":711,"name":"PUSH","value":"40"},{"begin":599,"end":711,"name":"MSTORE"},{"begin":599,"end":711,"name":"DUP1"},{"begin":599,"end":711,"name":"MLOAD"},{"begin":599,"end":711,"name":"PUSH","value":"20"},{"begin":599,"end":711,"name":"SWAP1"},{"begin":599,"end":711,"name":"SWAP2"},{"begin":599,"end":711,"name":"ADD"},{"begin":599,"end":711,"name":"MLOAD"},{"begin":656,"end":663,"name":"PUSH","value":"0"},{"begin":656,"end":671,"name":"DUP1"},{"begin":656,"end":671,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":656,"end":671,"name":"SWAP1"},{"begin":656,"end":671,"name":"SWAP3"},{"begin":656,"end":671,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":656,"end":671,"name":"SWAP1"},{"begin":656,"end":671,"name":"SWAP3"},{"begin":656,"end":671,"name":"AND"},{"begin":656,"end":671,"name":"SWAP2"},{"begin":656,"end":671,"name":"SWAP1"},{"begin":656,"end":671,"name":"SWAP2"},{"begin":656,"end":671,"name":"OR"},{"begin":656,"end":671,"name":"SWAP1"},{"begin":656,"end":671,"name":"SSTORE"},{"begin":656,"end":671,"name":"PUSH","value":"1"},{"begin":682,"end":703,"name":"SSTORE"},{"begin":357,"end":1048,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":357,"end":1048,"name":"PUSH","value":"0"},{"begin":357,"end":1048,"name":"CODECOPY"},{"begin":357,"end":1048,"name":"PUSH","value":"0"},{"begin":357,"end":1048,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a723058208f411b4a6f06f0ef81d671236617753c81d7de3f39bd54ff3016204bfe3fcb4e0029",".code":[{"begin":357,"end":1048,"name":"PUSH","value":"80"},{"begin":357,"end":1048,"name":"PUSH","value":"40"},{"begin":357,"end":1048,"name":"MSTORE"},{"begin":357,"end":1048,"name":"PUSH","value":"4"},{"begin":357,"end":1048,"name":"CALLDATASIZE"},{"begin":357,"end":1048,"name":"LT"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"1"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"PUSH","value":"FFFFFFFF"},{"begin":357,"end":1048,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":357,"end":1048,"name":"PUSH","value":"0"},{"begin":357,"end":1048,"name":"CALLDATALOAD"},{"begin":357,"end":1048,"name":"DIV"},{"begin":357,"end":1048,"name":"AND"},{"begin":357,"end":1048,"name":"PUSH","value":"4051DDAC"},{"begin":357,"end":1048,"name":"DUP2"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"2"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH","value":"481C6A75"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"3"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH","value":"97A993AA"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"4"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH","value":"9E0CEA05"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"5"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH","value":"A6F2AE3A"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"6"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"PUSH","value":"CE592954"},{"begin":357,"end":1048,"name":"EQ"},{"begin":357,"end":1048,"name":"PUSH [tag]","value":"7"},{"begin":357,"end":1048,"name":"JUMPI"},{"begin":357,"end":1048,"name":"tag","value":"1"},{"begin":357,"end":1048,"name":"JUMPDEST"},{"begin":357,"end":1048,"name":"PUSH","value":"0"},{"begin":357,"end":1048,"name":"DUP1"},{"begin":357,"end":1048,"name":"REVERT"},{"begin":864,"end":1039,"name":"tag","value":"2"},{"begin":864,"end":1039,"name":"JUMPDEST"},{"begin":864,"end":1039,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"8"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"8"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":864,"end":1039,"name":"POP"},{"begin":864,"end":1039,"name":"PUSH [tag]","value":"9"},{"begin":864,"end":1039,"name":"PUSH [tag]","value":"10"},{"begin":864,"end":1039,"name":"JUMP"},{"begin":864,"end":1039,"name":"tag","value":"9"},{"begin":864,"end":1039,"name":"JUMPDEST"},{"begin":864,"end":1039,"name":"PUSH","value":"40"},{"begin":864,"end":1039,"name":"DUP1"},{"begin":864,"end":1039,"name":"MLOAD"},{"begin":864,"end":1039,"name":"SWAP4"},{"begin":864,"end":1039,"name":"DUP5"},{"begin":864,"end":1039,"name":"MSTORE"},{"begin":864,"end":1039,"name":"PUSH","value":"20"},{"begin":864,"end":1039,"name":"DUP5"},{"begin":864,"end":1039,"name":"ADD"},{"begin":864,"end":1039,"name":"SWAP3"},{"begin":864,"end":1039,"name":"SWAP1"},{"begin":864,"end":1039,"name":"SWAP3"},{"begin":864,"end":1039,"name":"MSTORE"},{"begin":864,"end":1039,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":864,"end":1039,"name":"AND"},{"begin":864,"end":1039,"name":"DUP3"},{"begin":864,"end":1039,"name":"DUP3"},{"begin":864,"end":1039,"name":"ADD"},{"begin":864,"end":1039,"name":"MSTORE"},{"begin":864,"end":1039,"name":"MLOAD"},{"begin":864,"end":1039,"name":"SWAP1"},{"begin":864,"end":1039,"name":"DUP2"},{"begin":864,"end":1039,"name":"SWAP1"},{"begin":864,"end":1039,"name":"SUB"},{"begin":864,"end":1039,"name":"PUSH","value":"60"},{"begin":864,"end":1039,"name":"ADD"},{"begin":864,"end":1039,"name":"SWAP1"},{"begin":864,"end":1039,"name":"RETURN"},{"begin":378,"end":400,"name":"tag","value":"3"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"11"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"11"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"POP"},{"begin":378,"end":400,"name":"PUSH [tag]","value":"12"},{"begin":378,"end":400,"name":"PUSH [tag]","value":"13"},{"begin":378,"end":400,"name":"JUMP"},{"begin":378,"end":400,"name":"tag","value":"12"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"PUSH","value":"40"},{"begin":378,"end":400,"name":"DUP1"},{"begin":378,"end":400,"name":"MLOAD"},{"begin":378,"end":400,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"SWAP3"},{"begin":378,"end":400,"name":"AND"},{"begin":378,"end":400,"name":"DUP3"},{"begin":378,"end":400,"name":"MSTORE"},{"begin":378,"end":400,"name":"MLOAD"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"DUP2"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"SUB"},{"begin":378,"end":400,"name":"PUSH","value":"20"},{"begin":378,"end":400,"name":"ADD"},{"begin":378,"end":400,"name":"SWAP1"},{"begin":378,"end":400,"name":"RETURN"},{"begin":439,"end":475,"name":"tag","value":"4"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"14"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"14"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":439,"end":475,"name":"PUSH [tag]","value":"15"},{"begin":439,"end":475,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":439,"end":475,"name":"PUSH","value":"4"},{"begin":439,"end":475,"name":"CALLDATALOAD"},{"begin":439,"end":475,"name":"AND"},{"begin":439,"end":475,"name":"PUSH [tag]","value":"16"},{"begin":439,"end":475,"name":"JUMP"},{"begin":439,"end":475,"name":"tag","value":"15"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"PUSH","value":"40"},{"begin":439,"end":475,"name":"DUP1"},{"begin":439,"end":475,"name":"MLOAD"},{"begin":439,"end":475,"name":"SWAP2"},{"begin":439,"end":475,"name":"ISZERO"},{"begin":439,"end":475,"name":"ISZERO"},{"begin":439,"end":475,"name":"DUP3"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"MLOAD"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"SUB"},{"begin":439,"end":475,"name":"PUSH","value":"20"},{"begin":439,"end":475,"name":"ADD"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"RETURN"},{"begin":482,"end":504,"name":"tag","value":"5"},{"begin":482,"end":504,"name":"JUMPDEST"},{"begin":482,"end":504,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"17"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"17"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":482,"end":504,"name":"POP"},{"begin":482,"end":504,"name":"PUSH [tag]","value":"18"},{"begin":482,"end":504,"name":"PUSH [tag]","value":"19"},{"begin":482,"end":504,"name":"JUMP"},{"begin":482,"end":504,"name":"tag","value":"18"},{"begin":482,"end":504,"name":"JUMPDEST"},{"begin":482,"end":504,"name":"PUSH","value":"40"},{"begin":482,"end":504,"name":"DUP1"},{"begin":482,"end":504,"name":"MLOAD"},{"begin":482,"end":504,"name":"SWAP2"},{"begin":482,"end":504,"name":"DUP3"},{"begin":482,"end":504,"name":"MSTORE"},{"begin":482,"end":504,"name":"MLOAD"},{"begin":482,"end":504,"name":"SWAP1"},{"begin":482,"end":504,"name":"DUP2"},{"begin":482,"end":504,"name":"SWAP1"},{"begin":482,"end":504,"name":"SUB"},{"begin":482,"end":504,"name":"PUSH","value":"20"},{"begin":482,"end":504,"name":"ADD"},{"begin":482,"end":504,"name":"SWAP1"},{"begin":482,"end":504,"name":"RETURN"},{"begin":717,"end":858,"name":"tag","value":"6"},{"begin":717,"end":858,"name":"JUMPDEST"},{"begin":717,"end":858,"name":"PUSH [tag]","value":"20"},{"begin":717,"end":858,"name":"PUSH [tag]","value":"21"},{"begin":717,"end":858,"name":"JUMP"},{"begin":717,"end":858,"name":"tag","value":"20"},{"begin":717,"end":858,"name":"JUMPDEST"},{"begin":717,"end":858,"name":"STOP"},{"begin":407,"end":432,"name":"tag","value":"7"},{"begin":407,"end":432,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"22"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"22"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"POP"},{"begin":407,"end":432,"name":"PUSH [tag]","value":"18"},{"begin":407,"end":432,"name":"PUSH [tag]","value":"24"},{"begin":407,"end":432,"name":"JUMP"},{"begin":864,"end":1039,"name":"tag","value":"10"},{"begin":864,"end":1039,"name":"JUMPDEST"},{"begin":960,"end":973,"name":"PUSH","value":"1"},{"begin":960,"end":973,"name":"SLOAD"},{"begin":988,"end":998,"name":"PUSH","value":"3"},{"begin":988,"end":998,"name":"SLOAD"},{"begin":906,"end":910,"name":"PUSH","value":"0"},{"begin":1013,"end":1020,"name":"SLOAD"},{"begin":1013,"end":1020,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1013,"end":1020,"name":"AND"},{"begin":864,"end":1039,"name":"SWAP1"},{"begin":864,"end":1039,"name":"SWAP2"},{"begin":864,"end":1039,"name":"SWAP3"},{"begin":864,"end":1039,"name":"JUMP","value":"[out]"},{"begin":378,"end":400,"name":"tag","value":"13"},{"begin":378,"end":400,"name":"JUMPDEST"},{"begin":378,"end":400,"name":"PUSH","value":"0"},{"begin":378,"end":400,"name":"SLOAD"},{"begin":378,"end":400,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":378,"end":400,"name":"AND"},{"begin":378,"end":400,"name":"DUP2"},{"begin":378,"end":400,"name":"JUMP","value":"[out]"},{"begin":439,"end":475,"name":"tag","value":"16"},{"begin":439,"end":475,"name":"JUMPDEST"},{"begin":439,"end":475,"name":"PUSH","value":"2"},{"begin":439,"end":475,"name":"PUSH","value":"20"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"PUSH","value":"0"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"MSTORE"},{"begin":439,"end":475,"name":"PUSH","value":"40"},{"begin":439,"end":475,"name":"SWAP1"},{"begin":439,"end":475,"name":"KECCAK256"},{"begin":439,"end":475,"name":"SLOAD"},{"begin":439,"end":475,"name":"PUSH","value":"FF"},{"begin":439,"end":475,"name":"AND"},{"begin":439,"end":475,"name":"DUP2"},{"begin":439,"end":475,"name":"JUMP","value":"[out]"},{"begin":482,"end":504,"name":"tag","value":"19"},{"begin":482,"end":504,"name":"JUMPDEST"},{"begin":482,"end":504,"name":"PUSH","value":"3"},{"begin":482,"end":504,"name":"SLOAD"},{"begin":482,"end":504,"name":"DUP2"},{"begin":482,"end":504,"name":"JUMP","value":"[out]"},{"begin":717,"end":858,"name":"tag","value":"21"},{"begin":717,"end":858,"name":"JUMPDEST"},{"begin":779,"end":792,"name":"PUSH","value":"1"},{"begin":779,"end":792,"name":"SLOAD"},{"begin":766,"end":775,"name":"CALLVALUE"},{"begin":766,"end":792,"name":"LT"},{"begin":766,"end":792,"name":"ISZERO"},{"begin":758,"end":793,"name":"PUSH [tag]","value":"27"},{"begin":758,"end":793,"name":"JUMPI"},{"begin":758,"end":793,"name":"PUSH","value":"0"},{"begin":758,"end":793,"name":"DUP1"},{"begin":758,"end":793,"name":"REVERT"},{"begin":758,"end":793,"name":"tag","value":"27"},{"begin":758,"end":793,"name":"JUMPDEST"},{"begin":811,"end":821,"name":"CALLER"},{"begin":804,"end":822,"name":"PUSH","value":"0"},{"begin":804,"end":822,"name":"SWAP1"},{"begin":804,"end":822,"name":"DUP2"},{"begin":804,"end":822,"name":"MSTORE"},{"begin":804,"end":810,"name":"PUSH","value":"2"},{"begin":804,"end":822,"name":"PUSH","value":"20"},{"begin":804,"end":822,"name":"MSTORE"},{"begin":804,"end":822,"name":"PUSH","value":"40"},{"begin":804,"end":822,"name":"SWAP1"},{"begin":804,"end":822,"name":"KECCAK256"},{"begin":804,"end":827,"name":"DUP1"},{"begin":804,"end":827,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":804,"end":827,"name":"AND"},{"begin":823,"end":827,"name":"PUSH","value":"1"},{"begin":804,"end":827,"name":"SWAP1"},{"begin":804,"end":827,"name":"DUP2"},{"begin":804,"end":827,"name":"OR"},{"begin":804,"end":827,"name":"SWAP1"},{"begin":804,"end":827,"name":"SWAP2"},{"begin":804,"end":827,"name":"SSTORE"},{"begin":838,"end":848,"name":"PUSH","value":"3"},{"begin":838,"end":850,"name":"DUP1"},{"begin":838,"end":850,"name":"SLOAD"},{"begin":838,"end":850,"name":"SWAP1"},{"begin":838,"end":850,"name":"SWAP2"},{"begin":838,"end":850,"name":"ADD"},{"begin":838,"end":850,"name":"SWAP1"},{"begin":838,"end":850,"name":"SSTORE"},{"begin":717,"end":858,"name":"JUMP","value":"[out]"},{"begin":407,"end":432,"name":"tag","value":"24"},{"begin":407,"end":432,"name":"JUMPDEST"},{"begin":407,"end":432,"name":"PUSH","value":"1"},{"begin":407,"end":432,"name":"SLOAD"},{"begin":407,"end":432,"name":"DUP2"},{"begin":407,"end":432,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b506040516040806102ab83398101604052805160209091015160008054600160a060020a03909216600160a060020a031990921691909117905560015561024f8061005c6000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634051ddac811461007c578063481c6a75146100c557806397a993aa146101035780639e0cea0514610145578063a6f2ae3a1461016c578063ce59295414610176575b600080fd5b34801561008857600080fd5b5061009161018b565b60408051938452602084019290925273ffffffffffffffffffffffffffffffffffffffff1682820152519081900360600190f35b3480156100d157600080fd5b506100da6101af565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561010f57600080fd5b5061013173ffffffffffffffffffffffffffffffffffffffff600435166101cb565b604080519115158252519081900360200190f35b34801561015157600080fd5b5061015a6101e0565b60408051918252519081900360200190f35b6101746101e6565b005b34801561018257600080fd5b5061015a61021d565b60015460035460005473ffffffffffffffffffffffffffffffffffffffff16909192565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60035481565b6001543410156101f557600080fd5b336000908152600260205260409020805460ff19166001908117909155600380549091019055565b600154815600a165627a7a723058208f411b4a6f06f0ef81d671236617753c81d7de3f39bd54ff3016204bfe3fcb4e0029","functionHashes":{"buy()":"a6f2ae3a","buyerCount()":"9e0cea05","buyers(address)":"97a993aa","costOfProduct()":"ce592954","getSummary()":"4051ddac","manager()":"481c6a75"},"gasEstimates":{"creation":[40614,118200],"external":{"buy()":40938,"buyerCount()":450,"buyers(address)":518,"costOfProduct()":494,"getSummary()":847,"manager()":421},"internal":{}},"interface":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"buyers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"buyerCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"buy\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"costOfProduct\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]","metadata":"{\\"compiler\\":{\\"version\\":\\"0.4.26+commit.4563c3fc\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"buyers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"buyerCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"buy\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"costOfProduct\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"\\":\\"Chain\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"\\":{\\"keccak256\\":\\"0xb62dc92c369fcae72ce17cd0dc77d7e21938f546f6e7fc24ea68be7ccbeb169f\\",\\"urls\\":[\\"bzzr://9dd741d73871f04790a34b7069cfa67c01448d19268f34947b3583f3509281a3\\"]}},\\"version\\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x2AB DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x1 SSTORE PUSH2 0x24F DUP1 PUSH2 0x5C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x77 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x4051DDAC DUP2 EQ PUSH2 0x7C JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0xC5 JUMPI DUP1 PUSH4 0x97A993AA EQ PUSH2 0x103 JUMPI DUP1 PUSH4 0x9E0CEA05 EQ PUSH2 0x145 JUMPI DUP1 PUSH4 0xA6F2AE3A EQ PUSH2 0x16C JUMPI DUP1 PUSH4 0xCE592954 EQ PUSH2 0x176 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x88 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x91 PUSH2 0x18B JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP4 DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 DUP3 ADD MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x60 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xD1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xDA PUSH2 0x1AF JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x10F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x131 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x4 CALLDATALOAD AND PUSH2 0x1CB JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x151 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15A PUSH2 0x1E0 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x174 PUSH2 0x1E6 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x182 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15A PUSH2 0x21D JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x3 SLOAD PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 SWAP2 SWAP3 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLVALUE LT ISZERO PUSH2 0x1F5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP16 COINBASE SHL 0x4a PUSH16 0x6F0EF81D671236617753C81D7DE3F39 0xbd SLOAD SELFDESTRUCT ADDRESS AND KECCAK256 0x4b INVALID 0x3f 0xcb 0x4e STOP 0x29 ","runtimeBytecode":"6080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634051ddac811461007c578063481c6a75146100c557806397a993aa146101035780639e0cea0514610145578063a6f2ae3a1461016c578063ce59295414610176575b600080fd5b34801561008857600080fd5b5061009161018b565b60408051938452602084019290925273ffffffffffffffffffffffffffffffffffffffff1682820152519081900360600190f35b3480156100d157600080fd5b506100da6101af565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561010f57600080fd5b5061013173ffffffffffffffffffffffffffffffffffffffff600435166101cb565b604080519115158252519081900360200190f35b34801561015157600080fd5b5061015a6101e0565b60408051918252519081900360200190f35b6101746101e6565b005b34801561018257600080fd5b5061015a61021d565b60015460035460005473ffffffffffffffffffffffffffffffffffffffff16909192565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60035481565b6001543410156101f557600080fd5b336000908152600260205260409020805460ff19166001908117909155600380549091019055565b600154815600a165627a7a723058208f411b4a6f06f0ef81d671236617753c81d7de3f39bd54ff3016204bfe3fcb4e0029","srcmap":"357:691:0:-;;;599:112;8:9:-1;5:2;;;30:1;27;20:12;5:2;599:112:0;;;;;;;;;;;;;;;;;;;656:7;:15;;-1:-1:-1;;;;;656:15:0;;;-1:-1:-1;;;;;;656:15:0;;;;;;;;;;682:21;357:691;;;;;;","srcmapRuntime":"357:691:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;864:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;864:175:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;378:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;378:22:0;;;;;;;;;;;;;;;;;;;;;;;439:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;439:36:0;;;;;;;;;;;;;;;;;;;;;;;;;482:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;482:22:0;;;;;;;;;;;;;;;;;;;;717:141;;;;;;407:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;407:25:0;;;;864:175;960:13;;988:10;;906:4;1013:7;;;864:175;;;:::o;378:22::-;;;;;;:::o;439:36::-;;;;;;;;;;;;;;;:::o;482:22::-;;;;:::o;717:141::-;779:13;;766:9;:26;;758:35;;;;;;811:10;804:18;;;;:6;:18;;;;;:23;;-1:-1:-1;;804:23:0;823:4;804:23;;;;;;838:10;:12;;;;;;;717:141::o;407:25::-;;;;:::o"}');

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\Header.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



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
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, "BuyIt")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Menu, {
    position: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Products")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__.Link, {
    route: "/products/new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 14
    }
  }, "+"))));
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

/***/ "./components/PayForm.js":
/*!*******************************!*\
  !*** ./components/PayForm.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_chain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/chain */ "./ethereum/chain.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\components\\PayForm.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PayForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      loading: false,
      errorMessage: "",
      status: ""
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const chain = (0,_ethereum_chain__WEBPACK_IMPORTED_MODULE_2__.default)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: "",
        status: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
        await chain.methods.buy().send({
          from: accounts[0],
          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.toWei(this.state.value, 'ether')
        });
        this.setState({
          status: "Paid successfully!"
        });
        _routes__WEBPACK_IMPORTED_MODULE_4__.Router.replaceRoute(`/products/${this.props.address}`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false,
        value: ''
      });
    });
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 18
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, "Pay here"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
      label: "ether",
      labelPosition: "right",
      value: this.state.value,
      onChange: event => this.setState({
        value: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      primary: true,
      loading: this.state.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, "Pay!"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PayForm);

/***/ }),

/***/ "./ethereum/chain.js":
/*!***************************!*\
  !*** ./ethereum/chain.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_Chain_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Chain.json */ "./ethereum/build/Chain.json");


/* harmony default export */ __webpack_exports__["default"] = (address => {
  return new _web3__WEBPACK_IMPORTED_MODULE_0__.default.eth.Contract(JSON.parse(_build_Chain_json__WEBPACK_IMPORTED_MODULE_1__.interface), address);
});

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

/***/ "./pages/products/show.js":
/*!********************************!*\
  !*** ./pages/products/show.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_chain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ethereum/chain */ "./ethereum/chain.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PayForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PayForm */ "./components/PayForm.js");
var _jsxFileName = "C:\\Users\\kirti\\OneDrive\\Desktop\\Study_work\\Mitacs\\chain2\\pages\\products\\show.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






class ProductShow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static async getInitialProps(props) {
    const chain = (0,_ethereum_chain__WEBPACK_IMPORTED_MODULE_2__.default)(props.query.address);
    const summary = await chain.methods.getSummary().call();
    console.log(summary);
    return {
      address: props.query.address,
      price: summary[0],
      buyCount: summary[1],
      manager: summary[2]
    };
  }

  renderCards() {
    const {
      price,
      buyCount,
      manager
    } = this.props;
    const items = [{
      header: manager,
      meta: 'Address of Manager',
      description: 'The manager is the seller of this product',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: price,
      meta: 'Price of the product',
      description: 'Pay the price to buy the product',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: buyCount,
      meta: 'Number of buyers',
      description: 'Number of people bought this product',
      style: {
        overflowWrap: 'break-word'
      }
    }];
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      items: items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 10
      }
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }
    }, "Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
      width: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 6
      }
    }, this.renderCards()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
      width: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }
    }, __jsx(_components_PayForm__WEBPACK_IMPORTED_MODULE_4__.default, {
      address: this.props.address,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductShow);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")(); //for vairable routing


routes.add('/products/new', '/products/new') //what url, which page
.add('/products/:address', '/products/show').add('/products/:address/requests', '/products/requests/index') //when variable is present in url
.add('/products/:address/requests/new', '/products/requests/new');
module.exports = routes;

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/products/show.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL1BheUZvcm0uanMiLCJ3ZWJwYWNrOi8vY2hhaW4yLy4vZXRoZXJldW0vY2hhaW4uanMiLCJ3ZWJwYWNrOi8vY2hhaW4yLy4vZXRoZXJldW0vd2ViMy5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9wcm9kdWN0cy9zaG93LmpzIiwid2VicGFjazovL2NoYWluMi8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsIlBheUZvcm0iLCJDb21wb25lbnQiLCJ2YWx1ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzdGF0dXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hhaW4iLCJDaGFpbiIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJidXkiLCJzZW5kIiwiZnJvbSIsInN0YXRlIiwiUm91dGVyIiwiZXJyIiwibWVzc2FnZSIsInJlbmRlciIsIm9uU3VibWl0IiwidGFyZ2V0IiwiSlNPTiIsInBhcnNlIiwicHJvdmlkZXIiLCJXZWIzIiwiUHJvZHVjdFNob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInN1bW1hcnkiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJwcmljZSIsImJ1eUNvdW50IiwibWFuYWdlciIsInJlbmRlckNhcmRzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSwrREFBYyxNQUFJO0FBQ2QsU0FDSSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUNBLGVBQVMsRUFBRTtBQUFaLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsQ0FGSixFQU1JLE1BQUMsd0RBQUQ7QUFBVyxZQUFRLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Y7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURFLENBREEsRUFLSSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDLGVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURHLENBTEosQ0FOSixDQURKO0FBa0JILENBbkJELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0RB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCLEtBQUtrQixXQUFMLEVBQXpCLENBREQsRUFFQyxNQUFDLDBEQUFEO0FBQWEsV0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLHdEQUFEO0FBQVMsYUFBTyxFQUFFLEtBQUsxQyxLQUFMLENBQVdZLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQUZELENBRkQsQ0FERDtBQVdBOztBQXJEa0M7O0FBdURwQywrREFBZW1CLFdBQWYsRTs7Ozs7Ozs7OztBQzdEQSxNQUFNa0IsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZixDLENBRUE7OztBQUNBRCxNQUFNLENBQ0xFLEdBREQsQ0FDSyxlQURMLEVBQ3NCLGVBRHRCLEVBQ3VDO0FBRHZDLENBRUNBLEdBRkQsQ0FFSyxvQkFGTCxFQUUyQixnQkFGM0IsRUFHQ0EsR0FIRCxDQUdLLDZCQUhMLEVBR29DLDBCQUhwQyxFQUdnRTtBQUhoRSxDQUlDQSxHQUpELENBSUssaUNBSkwsRUFJd0Msd0JBSnhDO0FBUUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosTUFBakIsQzs7Ozs7Ozs7Ozs7QUNYQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy9zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1lbnUgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxyXG5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5CdXlJdDwvYT4gXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCI+UHJvZHVjdHM8L2E+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL3Byb2R1Y3RzL25ld1wiPlxyXG4gICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPis8L2E+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuTWVudT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENoYWluIGZyb20gJy4uL2V0aGVyZXVtL2NoYWluJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgUGF5Rm9ybSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTpcIlwiLFxyXG4gICAgICAgIHN0YXR1czpcIlwiXHJcbiAgICB9O1xyXG4gICAgb25TdWJtaXQgPSBhc3luYyhldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhaW4gPSBDaGFpbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzYWdlOlwiXCIsc3RhdHVzOlwiXCJ9KTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBhd2FpdCBjaGFpbi5tZXRob2RzLmJ1eSgpLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsJ2V0aGVyJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1czpcIlBhaWQgc3VjY2Vzc2Z1bGx5IVwifSlcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL3Byb2R1Y3RzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApXHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ZXJyLm1lc3NhZ2V9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZSx2YWx1ZTonJ30pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGF5IGhlcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJldGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQ9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlBheSE8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXlGb3JtOyIsImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XHJcbmltcG9ydCBDaGFpbiBmcm9tICcuL2J1aWxkL0NoYWluLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGFkZHJlc3MpPT57XHJcbiAgICByZXR1cm4gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxyXG4gICAgICAgIEpTT04ucGFyc2UoQ2hhaW4uaW50ZXJmYWNlKSxcclxuICAgICAgICBhZGRyZXNzXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMhPT0gJ3VuZGVmaW5lZCcpeyAvLyBydW5uaW5nIGluIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIGF2YWlsYWJsZVxyXG5cclxuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG5cclxufSBlbHNle1xyXG4gICAgLy9vbiB0aGUgc2VydmVyIG9yIHVzZXIgZG9lc24ndCBoYXZlIG1ldGFtYXNrXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoIC8vcHJvdmlkaW5nIG91ciBwcm92aWRlclxyXG4gICAgICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My9hNTAyNzNjNTQ4MDc0ZTgyYjRiMWU3Nzk3NmYxNmE1ZlwiXHJcbiAgICApO1xyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2hhaW4gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2hhaW4nO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgUGF5Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BheUZvcm0nO1xyXG5cclxuY2xhc3MgUHJvZHVjdFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuXHRcdGNvbnN0IGNoYWluID0gQ2hhaW4ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcblxyXG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNoYWluLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuXHRcdGNvbnNvbGUubG9nKHN1bW1hcnkpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcblx0XHRcdHByaWNlOiBzdW1tYXJ5WzBdLFxyXG5cdFx0XHRidXlDb3VudDogc3VtbWFyeVsxXSxcclxuXHRcdFx0bWFuYWdlcjogc3VtbWFyeVsyXSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDYXJkcygpIHtcclxuXHRcdGNvbnN0IHsgcHJpY2UsIGJ1eUNvdW50LCBtYW5hZ2VyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBtYW5hZ2VyLFxyXG5cdFx0XHRcdG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgaXMgdGhlIHNlbGxlciBvZiB0aGlzIHByb2R1Y3QnLFxyXG5cdFx0XHRcdHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHByaWNlLFxyXG5cdFx0XHRcdG1ldGE6ICdQcmljZSBvZiB0aGUgcHJvZHVjdCcsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdQYXkgdGhlIHByaWNlIHRvIGJ1eSB0aGUgcHJvZHVjdCcsXHJcblx0XHRcdFx0c3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogYnV5Q291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBidXllcnMnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSBib3VnaHQgdGhpcyBwcm9kdWN0JyxcclxuXHRcdFx0XHRzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8aDM+UHJvZHVjdDwvaDM+XHJcblx0XHRcdFx0PEdyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcblx0XHRcdFx0XHQ8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG5cdFx0XHRcdFx0XHQ8UGF5Rm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9Lz5cclxuXHRcdFx0XHRcdDwvR3JpZC5Db2x1bW4+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTaG93O1xyXG4iLCJjb25zdCByb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKCk7XHJcblxyXG4vL2ZvciB2YWlyYWJsZSByb3V0aW5nXHJcbnJvdXRlc1xyXG4uYWRkKCcvcHJvZHVjdHMvbmV3JywgJy9wcm9kdWN0cy9uZXcnKSAvL3doYXQgdXJsLCB3aGljaCBwYWdlXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcycsICcvcHJvZHVjdHMvc2hvdycpXHJcbi5hZGQoJy9wcm9kdWN0cy86YWRkcmVzcy9yZXF1ZXN0cycsICcvcHJvZHVjdHMvcmVxdWVzdHMvaW5kZXgnKSAvL3doZW4gdmFyaWFibGUgaXMgcHJlc2VudCBpbiB1cmxcclxuLmFkZCgnL3Byb2R1Y3RzLzphZGRyZXNzL3JlcXVlc3RzL25ldycsICcvcHJvZHVjdHMvcmVxdWVzdHMvbmV3Jyk7XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==