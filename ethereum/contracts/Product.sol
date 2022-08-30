pragma solidity ^0.4.17;

contract Product {

    struct detail{

        address manager;
        uint256 costOfProduct;
        uint256 costOfProductByDistributor;
        uint256 costOfProductByRetailer;
        mapping(address => bool) buyers;
        uint256 buyerCount;
        uint256 valueOfQuality;
        address farmerid;
        address distributorid;
        address retailerid;
        address customerid;
        string status;
        uint256 time;
    }
    detail public product;

    modifier restricted() {
        require(msg.sender == product.manager);
        _;
    }

    constructor(uint256 price, address creator) public {
        product.manager = creator;
        product.costOfProduct = price;
        product.time = block.timestamp;
        product.farmerid = creator;
        product.status = "Harvested";
    }

    function setDistributor(address _address) public {
        product.distributorid = _address;
    }
    function setRetailer(address _address) public {
        product.retailerid = _address;
    }
    function setCustomer(address _address) public {
        product.customerid = _address;
    }
    function updateStatus(string status) public {
        product.status = status;
        product.time = now;
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
            string,
            uint256
        )
    {
        return (product.costOfProduct, product.buyerCount, product.manager, product.farmerid, product.distributorid, product.retailerid, product.customerid, product.status, product.time);
    }
}
