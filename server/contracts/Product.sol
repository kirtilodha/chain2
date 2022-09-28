// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Product {

    struct detail{

        address manager;
        uint256 costOfProduct;
        uint256 costOfProductByDistributor;
        uint256 costOfProductByRetailer;
        mapping(address => bool) buyers;
        uint256 buyerCount;
        uint256 valueOfQuality;
        address payable farmerid;
        address payable distributorid;
        address payable retailerid;
        address customerid;
        string status;
        uint256 time;
    }
    detail public product;

    modifier restricted() {
        require(msg.sender == product.manager);
        _;
    }

    constructor(uint256 price, address creator) {
        product.manager = payable(creator);
        product.costOfProduct = price;
        product.time = block.timestamp;
        product.farmerid = payable(creator);
        product.status = "Harvested";
    }

    function setDistributor(address _address) public {
        product.distributorid = payable(_address);
    }
    function setRetailer(address _address) public {
        product.retailerid = payable(_address);
    }
    function setCustomer(address _address) public {
        product.customerid = payable(_address);
    }
    function updateStatus(string memory status) public {
        product.status = status;
        product.time = block.timestamp;
    }
    function DistributorBuy() public payable{
        require(msg.value >= product.costOfProduct, "Not sufficient");
        require(keccak256(abi.encodePacked((product.status))) == keccak256(abi.encodePacked(("sell"))), "Status incorrect!");

        product.farmerid.transfer(product.costOfProduct); //transfer money to farmer
        setDistributor(msg.sender);
        updateStatus("bought");
    }
    function DistributorShip(uint256 price) public{
        product.costOfProductByDistributor= price;
        updateStatus("shipped");
    }
    function RetailerReceive(uint256 price) public payable{
        require(msg.value >= product.costOfProductByDistributor, "Not sufficient");
        require(keccak256(abi.encodePacked((product.status))) == keccak256(abi.encodePacked(("shipped"))), "Status incorrect!");

        product.costOfProductByRetailer = price;
        product.distributorid.transfer(product.costOfProductByDistributor);
        setRetailer(msg.sender);
        updateStatus("received");

    }
    function buy(string memory quality) public payable {
        if(keccak256(abi.encodePacked((quality))) == keccak256(abi.encodePacked(("high")))) product.valueOfQuality=product.costOfProductByRetailer;
        else if(keccak256(abi.encodePacked((quality))) == keccak256(abi.encodePacked(("medium")))) product.valueOfQuality= product.costOfProductByRetailer* 75/100;
        else product.valueOfQuality = product.costOfProductByRetailer * 50/100;

        require(keccak256(abi.encodePacked((product.status))) == keccak256(abi.encodePacked(("received"))), "Status incorrect!");
        require(msg.value >= product.valueOfQuality);
        
        product.retailerid.transfer(product.valueOfQuality);
        setCustomer(msg.sender);
        product.buyers[msg.sender] = true;
        product.buyerCount++;
    }
    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            address,
            address,
            address,
            address,
            address,
            string memory,
            uint256
        )
    {
        return (product.costOfProduct, product.buyerCount, product.manager, product.farmerid, product.distributorid, product.retailerid, product.customerid, product.status, product.time);
    }
}
