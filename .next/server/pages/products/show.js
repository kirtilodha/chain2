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
module.exports = JSON.parse('{"assembly":{".code":[{"begin":1960,"end":2711,"name":"PUSH","value":"80"},{"begin":1960,"end":2711,"name":"PUSH","value":"40"},{"begin":1960,"end":2711,"name":"MSTORE"},{"begin":2216,"end":2335,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2216,"end":2335,"name":"POP"},{"begin":2216,"end":2335,"name":"PUSH","value":"40"},{"begin":2216,"end":2335,"name":"MLOAD"},{"begin":2216,"end":2335,"name":"PUSH","value":"40"},{"begin":2216,"end":2335,"name":"DUP1"},{"begin":2216,"end":2335,"name":"PUSHSIZE"},{"begin":2216,"end":2335,"name":"DUP4"},{"begin":2216,"end":2335,"name":"CODECOPY"},{"begin":2216,"end":2335,"name":"DUP2"},{"begin":2216,"end":2335,"name":"ADD"},{"begin":2216,"end":2335,"name":"PUSH","value":"40"},{"begin":2216,"end":2335,"name":"MSTORE"},{"begin":2216,"end":2335,"name":"DUP1"},{"begin":2216,"end":2335,"name":"MLOAD"},{"begin":2216,"end":2335,"name":"PUSH","value":"20"},{"begin":2216,"end":2335,"name":"SWAP1"},{"begin":2216,"end":2335,"name":"SWAP2"},{"begin":2216,"end":2335,"name":"ADD"},{"begin":2216,"end":2335,"name":"MLOAD"},{"begin":2278,"end":2285,"name":"PUSH","value":"0"},{"begin":2278,"end":2295,"name":"DUP1"},{"begin":2278,"end":2295,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2278,"end":2295,"name":"SWAP1"},{"begin":2278,"end":2295,"name":"SWAP3"},{"begin":2278,"end":2295,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":2278,"end":2295,"name":"SWAP1"},{"begin":2278,"end":2295,"name":"SWAP3"},{"begin":2278,"end":2295,"name":"AND"},{"begin":2278,"end":2295,"name":"SWAP2"},{"begin":2278,"end":2295,"name":"SWAP1"},{"begin":2278,"end":2295,"name":"SWAP2"},{"begin":2278,"end":2295,"name":"OR"},{"begin":2278,"end":2295,"name":"SWAP1"},{"begin":2278,"end":2295,"name":"SSTORE"},{"begin":2278,"end":2295,"name":"PUSH","value":"1"},{"begin":2306,"end":2327,"name":"SSTORE"},{"begin":1960,"end":2711,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":1960,"end":2711,"name":"PUSH","value":"0"},{"begin":1960,"end":2711,"name":"CODECOPY"},{"begin":1960,"end":2711,"name":"PUSH","value":"0"},{"begin":1960,"end":2711,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a723058201ed06ba45fd3e31503552f0f5318ebaccd5fb0816f4317737bda500df7a831230029",".code":[{"begin":1960,"end":2711,"name":"PUSH","value":"80"},{"begin":1960,"end":2711,"name":"PUSH","value":"40"},{"begin":1960,"end":2711,"name":"MSTORE"},{"begin":1960,"end":2711,"name":"PUSH","value":"4"},{"begin":1960,"end":2711,"name":"CALLDATASIZE"},{"begin":1960,"end":2711,"name":"LT"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"1"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"PUSH","value":"FFFFFFFF"},{"begin":1960,"end":2711,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":1960,"end":2711,"name":"PUSH","value":"0"},{"begin":1960,"end":2711,"name":"CALLDATALOAD"},{"begin":1960,"end":2711,"name":"DIV"},{"begin":1960,"end":2711,"name":"AND"},{"begin":1960,"end":2711,"name":"PUSH","value":"4051DDAC"},{"begin":1960,"end":2711,"name":"DUP2"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"2"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH","value":"481C6A75"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"3"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH","value":"97A993AA"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"4"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH","value":"9E0CEA05"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"5"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH","value":"A6F2AE3A"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"6"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"PUSH","value":"CE592954"},{"begin":1960,"end":2711,"name":"EQ"},{"begin":1960,"end":2711,"name":"PUSH [tag]","value":"7"},{"begin":1960,"end":2711,"name":"JUMPI"},{"begin":1960,"end":2711,"name":"tag","value":"1"},{"begin":1960,"end":2711,"name":"JUMPDEST"},{"begin":1960,"end":2711,"name":"PUSH","value":"0"},{"begin":1960,"end":2711,"name":"DUP1"},{"begin":1960,"end":2711,"name":"REVERT"},{"begin":2494,"end":2708,"name":"tag","value":"2"},{"begin":2494,"end":2708,"name":"JUMPDEST"},{"begin":2494,"end":2708,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"8"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"8"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2494,"end":2708,"name":"POP"},{"begin":2494,"end":2708,"name":"PUSH [tag]","value":"9"},{"begin":2494,"end":2708,"name":"PUSH [tag]","value":"10"},{"begin":2494,"end":2708,"name":"JUMP"},{"begin":2494,"end":2708,"name":"tag","value":"9"},{"begin":2494,"end":2708,"name":"JUMPDEST"},{"begin":2494,"end":2708,"name":"PUSH","value":"40"},{"begin":2494,"end":2708,"name":"DUP1"},{"begin":2494,"end":2708,"name":"MLOAD"},{"begin":2494,"end":2708,"name":"SWAP4"},{"begin":2494,"end":2708,"name":"DUP5"},{"begin":2494,"end":2708,"name":"MSTORE"},{"begin":2494,"end":2708,"name":"PUSH","value":"20"},{"begin":2494,"end":2708,"name":"DUP5"},{"begin":2494,"end":2708,"name":"ADD"},{"begin":2494,"end":2708,"name":"SWAP3"},{"begin":2494,"end":2708,"name":"SWAP1"},{"begin":2494,"end":2708,"name":"SWAP3"},{"begin":2494,"end":2708,"name":"MSTORE"},{"begin":2494,"end":2708,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":2494,"end":2708,"name":"AND"},{"begin":2494,"end":2708,"name":"DUP3"},{"begin":2494,"end":2708,"name":"DUP3"},{"begin":2494,"end":2708,"name":"ADD"},{"begin":2494,"end":2708,"name":"MSTORE"},{"begin":2494,"end":2708,"name":"MLOAD"},{"begin":2494,"end":2708,"name":"SWAP1"},{"begin":2494,"end":2708,"name":"DUP2"},{"begin":2494,"end":2708,"name":"SWAP1"},{"begin":2494,"end":2708,"name":"SUB"},{"begin":2494,"end":2708,"name":"PUSH","value":"60"},{"begin":2494,"end":2708,"name":"ADD"},{"begin":2494,"end":2708,"name":"SWAP1"},{"begin":2494,"end":2708,"name":"RETURN"},{"begin":1982,"end":2004,"name":"tag","value":"3"},{"begin":1982,"end":2004,"name":"JUMPDEST"},{"begin":1982,"end":2004,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"11"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"11"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1982,"end":2004,"name":"POP"},{"begin":1982,"end":2004,"name":"PUSH [tag]","value":"12"},{"begin":1982,"end":2004,"name":"PUSH [tag]","value":"13"},{"begin":1982,"end":2004,"name":"JUMP"},{"begin":1982,"end":2004,"name":"tag","value":"12"},{"begin":1982,"end":2004,"name":"JUMPDEST"},{"begin":1982,"end":2004,"name":"PUSH","value":"40"},{"begin":1982,"end":2004,"name":"DUP1"},{"begin":1982,"end":2004,"name":"MLOAD"},{"begin":1982,"end":2004,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1982,"end":2004,"name":"SWAP1"},{"begin":1982,"end":2004,"name":"SWAP3"},{"begin":1982,"end":2004,"name":"AND"},{"begin":1982,"end":2004,"name":"DUP3"},{"begin":1982,"end":2004,"name":"MSTORE"},{"begin":1982,"end":2004,"name":"MLOAD"},{"begin":1982,"end":2004,"name":"SWAP1"},{"begin":1982,"end":2004,"name":"DUP2"},{"begin":1982,"end":2004,"name":"SWAP1"},{"begin":1982,"end":2004,"name":"SUB"},{"begin":1982,"end":2004,"name":"PUSH","value":"20"},{"begin":1982,"end":2004,"name":"ADD"},{"begin":1982,"end":2004,"name":"SWAP1"},{"begin":1982,"end":2004,"name":"RETURN"},{"begin":2046,"end":2084,"name":"tag","value":"4"},{"begin":2046,"end":2084,"name":"JUMPDEST"},{"begin":2046,"end":2084,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"14"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"14"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2046,"end":2084,"name":"PUSH [tag]","value":"15"},{"begin":2046,"end":2084,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":2046,"end":2084,"name":"PUSH","value":"4"},{"begin":2046,"end":2084,"name":"CALLDATALOAD"},{"begin":2046,"end":2084,"name":"AND"},{"begin":2046,"end":2084,"name":"PUSH [tag]","value":"16"},{"begin":2046,"end":2084,"name":"JUMP"},{"begin":2046,"end":2084,"name":"tag","value":"15"},{"begin":2046,"end":2084,"name":"JUMPDEST"},{"begin":2046,"end":2084,"name":"PUSH","value":"40"},{"begin":2046,"end":2084,"name":"DUP1"},{"begin":2046,"end":2084,"name":"MLOAD"},{"begin":2046,"end":2084,"name":"SWAP2"},{"begin":2046,"end":2084,"name":"ISZERO"},{"begin":2046,"end":2084,"name":"ISZERO"},{"begin":2046,"end":2084,"name":"DUP3"},{"begin":2046,"end":2084,"name":"MSTORE"},{"begin":2046,"end":2084,"name":"MLOAD"},{"begin":2046,"end":2084,"name":"SWAP1"},{"begin":2046,"end":2084,"name":"DUP2"},{"begin":2046,"end":2084,"name":"SWAP1"},{"begin":2046,"end":2084,"name":"SUB"},{"begin":2046,"end":2084,"name":"PUSH","value":"20"},{"begin":2046,"end":2084,"name":"ADD"},{"begin":2046,"end":2084,"name":"SWAP1"},{"begin":2046,"end":2084,"name":"RETURN"},{"begin":2091,"end":2116,"name":"tag","value":"5"},{"begin":2091,"end":2116,"name":"JUMPDEST"},{"begin":2091,"end":2116,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"17"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"17"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2091,"end":2116,"name":"POP"},{"begin":2091,"end":2116,"name":"PUSH [tag]","value":"18"},{"begin":2091,"end":2116,"name":"PUSH [tag]","value":"19"},{"begin":2091,"end":2116,"name":"JUMP"},{"begin":2091,"end":2116,"name":"tag","value":"18"},{"begin":2091,"end":2116,"name":"JUMPDEST"},{"begin":2091,"end":2116,"name":"PUSH","value":"40"},{"begin":2091,"end":2116,"name":"DUP1"},{"begin":2091,"end":2116,"name":"MLOAD"},{"begin":2091,"end":2116,"name":"SWAP2"},{"begin":2091,"end":2116,"name":"DUP3"},{"begin":2091,"end":2116,"name":"MSTORE"},{"begin":2091,"end":2116,"name":"MLOAD"},{"begin":2091,"end":2116,"name":"SWAP1"},{"begin":2091,"end":2116,"name":"DUP2"},{"begin":2091,"end":2116,"name":"SWAP1"},{"begin":2091,"end":2116,"name":"SUB"},{"begin":2091,"end":2116,"name":"PUSH","value":"20"},{"begin":2091,"end":2116,"name":"ADD"},{"begin":2091,"end":2116,"name":"SWAP1"},{"begin":2091,"end":2116,"name":"RETURN"},{"begin":2343,"end":2486,"name":"tag","value":"6"},{"begin":2343,"end":2486,"name":"JUMPDEST"},{"begin":2343,"end":2486,"name":"PUSH [tag]","value":"20"},{"begin":2343,"end":2486,"name":"PUSH [tag]","value":"21"},{"begin":2343,"end":2486,"name":"JUMP"},{"begin":2343,"end":2486,"name":"tag","value":"20"},{"begin":2343,"end":2486,"name":"JUMPDEST"},{"begin":2343,"end":2486,"name":"STOP"},{"begin":2011,"end":2039,"name":"tag","value":"7"},{"begin":2011,"end":2039,"name":"JUMPDEST"},{"begin":2011,"end":2039,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"22"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"22"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2011,"end":2039,"name":"POP"},{"begin":2011,"end":2039,"name":"PUSH [tag]","value":"18"},{"begin":2011,"end":2039,"name":"PUSH [tag]","value":"24"},{"begin":2011,"end":2039,"name":"JUMP"},{"begin":2494,"end":2708,"name":"tag","value":"10"},{"begin":2494,"end":2708,"name":"JUMPDEST"},{"begin":2665,"end":2678,"name":"PUSH","value":"1"},{"begin":2665,"end":2678,"name":"SLOAD"},{"begin":2680,"end":2690,"name":"PUSH","value":"3"},{"begin":2680,"end":2690,"name":"SLOAD"},{"begin":2578,"end":2585,"name":"PUSH","value":"0"},{"begin":2692,"end":2699,"name":"SLOAD"},{"begin":2692,"end":2699,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":2692,"end":2699,"name":"AND"},{"begin":2494,"end":2708,"name":"SWAP1"},{"begin":2494,"end":2708,"name":"SWAP2"},{"begin":2494,"end":2708,"name":"SWAP3"},{"begin":2494,"end":2708,"name":"JUMP","value":"[out]"},{"begin":1982,"end":2004,"name":"tag","value":"13"},{"begin":1982,"end":2004,"name":"JUMPDEST"},{"begin":1982,"end":2004,"name":"PUSH","value":"0"},{"begin":1982,"end":2004,"name":"SLOAD"},{"begin":1982,"end":2004,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1982,"end":2004,"name":"AND"},{"begin":1982,"end":2004,"name":"DUP2"},{"begin":1982,"end":2004,"name":"JUMP","value":"[out]"},{"begin":2046,"end":2084,"name":"tag","value":"16"},{"begin":2046,"end":2084,"name":"JUMPDEST"},{"begin":2046,"end":2084,"name":"PUSH","value":"2"},{"begin":2046,"end":2084,"name":"PUSH","value":"20"},{"begin":2046,"end":2084,"name":"MSTORE"},{"begin":2046,"end":2084,"name":"PUSH","value":"0"},{"begin":2046,"end":2084,"name":"SWAP1"},{"begin":2046,"end":2084,"name":"DUP2"},{"begin":2046,"end":2084,"name":"MSTORE"},{"begin":2046,"end":2084,"name":"PUSH","value":"40"},{"begin":2046,"end":2084,"name":"SWAP1"},{"begin":2046,"end":2084,"name":"KECCAK256"},{"begin":2046,"end":2084,"name":"SLOAD"},{"begin":2046,"end":2084,"name":"PUSH","value":"FF"},{"begin":2046,"end":2084,"name":"AND"},{"begin":2046,"end":2084,"name":"DUP2"},{"begin":2046,"end":2084,"name":"JUMP","value":"[out]"},{"begin":2091,"end":2116,"name":"tag","value":"19"},{"begin":2091,"end":2116,"name":"JUMPDEST"},{"begin":2091,"end":2116,"name":"PUSH","value":"3"},{"begin":2091,"end":2116,"name":"SLOAD"},{"begin":2091,"end":2116,"name":"DUP2"},{"begin":2091,"end":2116,"name":"JUMP","value":"[out]"},{"begin":2343,"end":2486,"name":"tag","value":"21"},{"begin":2343,"end":2486,"name":"JUMPDEST"},{"begin":2405,"end":2418,"name":"PUSH","value":"1"},{"begin":2405,"end":2418,"name":"SLOAD"},{"begin":2392,"end":2401,"name":"CALLVALUE"},{"begin":2392,"end":2418,"name":"LT"},{"begin":2392,"end":2418,"name":"ISZERO"},{"begin":2384,"end":2419,"name":"PUSH [tag]","value":"27"},{"begin":2384,"end":2419,"name":"JUMPI"},{"begin":2384,"end":2419,"name":"PUSH","value":"0"},{"begin":2384,"end":2419,"name":"DUP1"},{"begin":2384,"end":2419,"name":"REVERT"},{"begin":2384,"end":2419,"name":"tag","value":"27"},{"begin":2384,"end":2419,"name":"JUMPDEST"},{"begin":2437,"end":2447,"name":"CALLER"},{"begin":2430,"end":2448,"name":"PUSH","value":"0"},{"begin":2430,"end":2448,"name":"SWAP1"},{"begin":2430,"end":2448,"name":"DUP2"},{"begin":2430,"end":2448,"name":"MSTORE"},{"begin":2430,"end":2436,"name":"PUSH","value":"2"},{"begin":2430,"end":2448,"name":"PUSH","value":"20"},{"begin":2430,"end":2448,"name":"MSTORE"},{"begin":2430,"end":2448,"name":"PUSH","value":"40"},{"begin":2430,"end":2448,"name":"SWAP1"},{"begin":2430,"end":2448,"name":"KECCAK256"},{"begin":2430,"end":2455,"name":"DUP1"},{"begin":2430,"end":2455,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":2430,"end":2455,"name":"AND"},{"begin":2451,"end":2455,"name":"PUSH","value":"1"},{"begin":2430,"end":2455,"name":"SWAP1"},{"begin":2430,"end":2455,"name":"DUP2"},{"begin":2430,"end":2455,"name":"OR"},{"begin":2430,"end":2455,"name":"SWAP1"},{"begin":2430,"end":2455,"name":"SWAP2"},{"begin":2430,"end":2455,"name":"SSTORE"},{"begin":2466,"end":2476,"name":"PUSH","value":"3"},{"begin":2466,"end":2478,"name":"DUP1"},{"begin":2466,"end":2478,"name":"SLOAD"},{"begin":2466,"end":2478,"name":"SWAP1"},{"begin":2466,"end":2478,"name":"SWAP2"},{"begin":2466,"end":2478,"name":"ADD"},{"begin":2466,"end":2478,"name":"SWAP1"},{"begin":2466,"end":2478,"name":"SSTORE"},{"begin":2343,"end":2486,"name":"JUMP","value":"[out]"},{"begin":2011,"end":2039,"name":"tag","value":"24"},{"begin":2011,"end":2039,"name":"JUMPDEST"},{"begin":2011,"end":2039,"name":"PUSH","value":"1"},{"begin":2011,"end":2039,"name":"SLOAD"},{"begin":2011,"end":2039,"name":"DUP2"},{"begin":2011,"end":2039,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b506040516040806102ab83398101604052805160209091015160008054600160a060020a03909216600160a060020a031990921691909117905560015561024f8061005c6000396000f3006080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634051ddac811461007c578063481c6a75146100c557806397a993aa146101035780639e0cea0514610145578063a6f2ae3a1461016c578063ce59295414610176575b600080fd5b34801561008857600080fd5b5061009161018b565b60408051938452602084019290925273ffffffffffffffffffffffffffffffffffffffff1682820152519081900360600190f35b3480156100d157600080fd5b506100da6101af565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561010f57600080fd5b5061013173ffffffffffffffffffffffffffffffffffffffff600435166101cb565b604080519115158252519081900360200190f35b34801561015157600080fd5b5061015a6101e0565b60408051918252519081900360200190f35b6101746101e6565b005b34801561018257600080fd5b5061015a61021d565b60015460035460005473ffffffffffffffffffffffffffffffffffffffff16909192565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60035481565b6001543410156101f557600080fd5b336000908152600260205260409020805460ff19166001908117909155600380549091019055565b600154815600a165627a7a723058201ed06ba45fd3e31503552f0f5318ebaccd5fb0816f4317737bda500df7a831230029","functionHashes":{"buy()":"a6f2ae3a","buyerCount()":"9e0cea05","buyers(address)":"97a993aa","costOfProduct()":"ce592954","getSummary()":"4051ddac","manager()":"481c6a75"},"gasEstimates":{"creation":[40614,118200],"external":{"buy()":40938,"buyerCount()":450,"buyers(address)":518,"costOfProduct()":494,"getSummary()":847,"manager()":421},"internal":{}},"interface":"[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"buyers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"buyerCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"buy\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"costOfProduct\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]","metadata":"{\\"compiler\\":{\\"version\\":\\"0.4.26+commit.4563c3fc\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"buyers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"buyerCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"buy\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"costOfProduct\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"\\":\\"Chain\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":true,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"\\":{\\"keccak256\\":\\"0x8d536b8cfe35e3739db56979973320e6de9c165c65b2745c80b88055cc7e713a\\",\\"urls\\":[\\"bzzr://80483b32198117303342e492195e0cd8ec7080682c3d3e10ec3a7359ec280443\\"]}},\\"version\\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x2AB DUP4 CODECOPY DUP2 ADD PUSH1 0x40 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD MLOAD PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR SWAP1 SSTORE PUSH1 0x1 SSTORE PUSH2 0x24F DUP1 PUSH2 0x5C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x77 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x4051DDAC DUP2 EQ PUSH2 0x7C JUMPI DUP1 PUSH4 0x481C6A75 EQ PUSH2 0xC5 JUMPI DUP1 PUSH4 0x97A993AA EQ PUSH2 0x103 JUMPI DUP1 PUSH4 0x9E0CEA05 EQ PUSH2 0x145 JUMPI DUP1 PUSH4 0xA6F2AE3A EQ PUSH2 0x16C JUMPI DUP1 PUSH4 0xCE592954 EQ PUSH2 0x176 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x88 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x91 PUSH2 0x18B JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP4 DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 DUP3 ADD MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x60 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xD1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xDA PUSH2 0x1AF JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x10F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x131 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF PUSH1 0x4 CALLDATALOAD AND PUSH2 0x1CB JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x151 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15A PUSH2 0x1E0 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH2 0x174 PUSH2 0x1E6 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x182 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15A PUSH2 0x21D JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x3 SLOAD PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 SWAP2 SWAP3 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD CALLVALUE LT ISZERO PUSH2 0x1F5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x2 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 SWAP1 DUP2 OR SWAP1 SWAP2 SSTORE PUSH1 0x3 DUP1 SLOAD SWAP1 SWAP2 ADD SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0x1e 0xd0 PUSH12 0xA45FD3E31503552F0F5318EB 0xac 0xcd 0x5f 0xb0 DUP2 PUSH16 0x4317737BDA500DF7A831230029000000 ","runtimeBytecode":"6080604052600436106100775763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416634051ddac811461007c578063481c6a75146100c557806397a993aa146101035780639e0cea0514610145578063a6f2ae3a1461016c578063ce59295414610176575b600080fd5b34801561008857600080fd5b5061009161018b565b60408051938452602084019290925273ffffffffffffffffffffffffffffffffffffffff1682820152519081900360600190f35b3480156100d157600080fd5b506100da6101af565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561010f57600080fd5b5061013173ffffffffffffffffffffffffffffffffffffffff600435166101cb565b604080519115158252519081900360200190f35b34801561015157600080fd5b5061015a6101e0565b60408051918252519081900360200190f35b6101746101e6565b005b34801561018257600080fd5b5061015a61021d565b60015460035460005473ffffffffffffffffffffffffffffffffffffffff16909192565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205460ff1681565b60035481565b6001543410156101f557600080fd5b336000908152600260205260409020805460ff19166001908117909155600380549091019055565b600154815600a165627a7a723058201ed06ba45fd3e31503552f0f5318ebaccd5fb0816f4317737bda500df7a831230029","srcmap":"1960:751:0:-;;;2216:119;8:9:-1;5:2;;;30:1;27;20:12;5:2;2216:119:0;;;;;;;;;;;;;;;;;;;2278:7;:17;;-1:-1:-1;;;;;2278:17:0;;;-1:-1:-1;;;;;;2278:17:0;;;;;;;;;;2306:21;1960:751;;;;;;","srcmapRuntime":"1960:751:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2494:214;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2494:214:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1982:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1982:22:0;;;;;;;;;;;;;;;;;;;;;;;2046:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2046:38:0;;;;;;;;;;;;;;;;;;;;;;;;;2091:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2091:25:0;;;;;;;;;;;;;;;;;;;;2343:143;;;;;;2011:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2011:28:0;;;;2494:214;2665:13;;2680:10;;2578:7;2692;;;2494:214;;;:::o;1982:22::-;;;;;;:::o;2046:38::-;;;;;;;;;;;;;;;:::o;2091:25::-;;;;:::o;2343:143::-;2405:13;;2392:9;:26;;2384:35;;;;;;2437:10;2430:18;;;;:6;:18;;;;;:25;;-1:-1:-1;;2430:25:0;2451:4;2430:25;;;;;;2466:10;:12;;;;;;;2343:143::o;2011:28::-;;;;:::o"}');

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
      errorMessage: ""
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const chain = (0,_ethereum_chain__WEBPACK_IMPORTED_MODULE_2__.default)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
        await chain.methods.buy().send({
          from: accounts[0],
          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.toWei(this.state.value, 'ether')
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
        lineNumber: 34,
        columnNumber: 18
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
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
        lineNumber: 37,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      primary: true,
      loading: this.state.loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
.add('/products/myProducts', '/products/myProducts').add('/products/:address', '/products/show').add('/products/:address/requests', '/products/requests/index') //when variable is present in url
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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js"], function() { return __webpack_exec__("./pages/products/show.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFpbjIvLi9jb21wb25lbnRzL1BheUZvcm0uanMiLCJ3ZWJwYWNrOi8vY2hhaW4yLy4vZXRoZXJldW0vY2hhaW4uanMiLCJ3ZWJwYWNrOi8vY2hhaW4yLy4vZXRoZXJldW0vd2ViMy5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvLi9wYWdlcy9wcm9kdWN0cy9zaG93LmpzIiwid2VicGFjazovL2NoYWluMi8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NoYWluMi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hhaW4yL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9jaGFpbjIvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiUGF5Rm9ybSIsIkNvbXBvbmVudCIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjaGFpbiIsIkNoYWluIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJhY2NvdW50cyIsIndlYjMiLCJtZXRob2RzIiwiYnV5Iiwic2VuZCIsImZyb20iLCJzdGF0ZSIsIlJvdXRlciIsImVyciIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJvblN1Ym1pdCIsInRhcmdldCIsIkpTT04iLCJwYXJzZSIsInByb3ZpZGVyIiwiV2ViMyIsIlByb2R1Y3RTaG93IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJzdW1tYXJ5IiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHJpY2UiLCJidXlDb3VudCIsIm1hbmFnZXIiLCJyZW5kZXJDYXJkcyIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJy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QTs7O0FBQ0FELE1BQU0sQ0FDTEUsR0FERCxDQUNLLGVBREwsRUFDc0IsZUFEdEIsRUFDdUM7QUFEdkMsQ0FFQ0EsR0FGRCxDQUVLLHNCQUZMLEVBRTZCLHNCQUY3QixFQUdDQSxHQUhELENBR0ssb0JBSEwsRUFHMkIsZ0JBSDNCLEVBSUNBLEdBSkQsQ0FJSyw2QkFKTCxFQUlvQywwQkFKcEMsRUFJZ0U7QUFKaEUsQ0FLQ0EsR0FMRCxDQUtLLGlDQUxMLEVBS3dDLHdCQUx4QztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDWkEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMvc2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDaGFpbiBmcm9tICcuLi9ldGhlcmV1bS9jaGFpbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIFBheUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgbG9hZGluZzpmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6XCJcIlxyXG4gICAgfTtcclxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYWluID0gQ2hhaW4odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlLGVycm9yTWVzc2FnZTpcIlwifSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cz0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgY2hhaW4ubWV0aG9kcy5idXkoKS5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGZyb206YWNjb3VudHNbMF0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCdldGhlcicpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvcHJvZHVjdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YClcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTplcnIubWVzc2FnZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLHZhbHVlOicnfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXkgaGVyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+UGF5ITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBheUZvcm07IiwiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcclxuaW1wb3J0IENoYWluIGZyb20gJy4vYnVpbGQvQ2hhaW4uanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYWRkcmVzcyk9PntcclxuICAgIHJldHVybiBuZXcgd2ViMy5ldGguQ29udHJhY3QoXHJcbiAgICAgICAgSlNPTi5wYXJzZShDaGFpbi5pbnRlcmZhY2UpLFxyXG4gICAgICAgIGFkZHJlc3NcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcblxyXG5sZXQgd2ViMztcclxuXHJcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyE9PSAndW5kZWZpbmVkJyl7IC8vIHJ1bm5pbmcgaW4gYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgYXZhaWxhYmxlXHJcblxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcblxyXG59IGVsc2V7XHJcbiAgICAvL29uIHRoZSBzZXJ2ZXIgb3IgdXNlciBkb2Vzbid0IGhhdmUgbWV0YW1hc2tcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlciggLy9wcm92aWRpbmcgb3VyIHByb3ZpZGVyXHJcbiAgICAgICAgXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzL2E1MDI3M2M1NDgwNzRlODJiNGIxZTc3OTc2ZjE2YTVmXCJcclxuICAgICk7XHJcbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDaGFpbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jaGFpbic7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBQYXlGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGF5Rm9ybSc7XHJcblxyXG5jbGFzcyBQcm9kdWN0U2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG5cdFx0Y29uc3QgY2hhaW4gPSBDaGFpbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuXHJcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2hhaW4ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cdFx0Y29uc29sZS5sb2coc3VtbWFyeSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuXHRcdFx0cHJpY2U6IHN1bW1hcnlbMF0sXHJcblx0XHRcdGJ1eUNvdW50OiBzdW1tYXJ5WzFdLFxyXG5cdFx0XHRtYW5hZ2VyOiBzdW1tYXJ5WzJdLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckNhcmRzKCkge1xyXG5cdFx0Y29uc3QgeyBwcmljZSwgYnV5Q291bnQsIG1hbmFnZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IG1hbmFnZXIsXHJcblx0XHRcdFx0bWV0YTogJ0FkZHJlc3Mgb2YgTWFuYWdlcicsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBpcyB0aGUgc2VsbGVyIG9mIHRoaXMgcHJvZHVjdCcsXHJcblx0XHRcdFx0c3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogcHJpY2UsXHJcblx0XHRcdFx0bWV0YTogJ1ByaWNlIG9mIHRoZSBwcm9kdWN0JyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1BheSB0aGUgcHJpY2UgdG8gYnV5IHRoZSBwcm9kdWN0JyxcclxuXHRcdFx0XHRzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBidXlDb3VudCxcclxuXHRcdFx0XHRtZXRhOiAnTnVtYmVyIG9mIGJ1eWVycycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGVvcGxlIGJvdWdodCB0aGlzIHByb2R1Y3QnLFxyXG5cdFx0XHRcdHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH0sXHJcblx0XHRcdH0sXHJcblx0XHRdO1xyXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxoMz5Qcm9kdWN0PC9oMz5cclxuXHRcdFx0XHQ8R3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuXHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcblx0XHRcdFx0XHRcdDxQYXlGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30vPlxyXG5cdFx0XHRcdFx0PC9HcmlkLkNvbHVtbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNob3c7XHJcbiIsImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbi8vZm9yIHZhaXJhYmxlIHJvdXRpbmdcclxucm91dGVzXHJcbi5hZGQoJy9wcm9kdWN0cy9uZXcnLCAnL3Byb2R1Y3RzL25ldycpIC8vd2hhdCB1cmwsIHdoaWNoIHBhZ2VcclxuLmFkZCgnL3Byb2R1Y3RzL215UHJvZHVjdHMnLCAnL3Byb2R1Y3RzL215UHJvZHVjdHMnKSBcclxuLmFkZCgnL3Byb2R1Y3RzLzphZGRyZXNzJywgJy9wcm9kdWN0cy9zaG93JylcclxuLmFkZCgnL3Byb2R1Y3RzLzphZGRyZXNzL3JlcXVlc3RzJywgJy9wcm9kdWN0cy9yZXF1ZXN0cy9pbmRleCcpIC8vd2hlbiB2YXJpYWJsZSBpcyBwcmVzZW50IGluIHVybFxyXG4uYWRkKCcvcHJvZHVjdHMvOmFkZHJlc3MvcmVxdWVzdHMvbmV3JywgJy9wcm9kdWN0cy9yZXF1ZXN0cy9uZXcnKTtcclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9