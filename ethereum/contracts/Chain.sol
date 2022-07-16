pragma solidity ^0.4.17;
contract MainChain{
    address[] public deployedChain;
    function createChain(uint price) public{
        address newChain = address(new Chain(price,msg.sender));
        deployedChain.push(newChain);
    }
    function getDeployedChains() public view returns(address[] memory) {
        return deployedChain;
    }
}
contract Chain{
    address public manager;
    uint public costOfProduct;
    mapping(address=>bool) public buyers;
    uint public buyerCount;

    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    constructor(uint price,address creator) public{
        manager=creator;
        costOfProduct = price;
    }
    function buy() public payable {
        require(msg.value >= costOfProduct);
        buyers[msg.sender]=true;
        buyerCount++;
    }
    function getSummary() public view returns(uint, uint, address) {
        return (
            costOfProduct,
            buyerCount,
            manager
        );
    }
    
}