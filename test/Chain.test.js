const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledMain = require('../ethereum/build/MainChain.json');
const compiledChain = require('../ethereum/build/Chain.json');

let accounts;
let main;
let chain;

beforeEach(async()=>{
    accounts=await web3.eth.getAccounts()

    main = await new web3.eth.Contract(JSON.parse(compiledMain.interface))
    .deploy({data: compiledMain.bytecode})
    .send({from:accounts[0],gas:'1000000'});

    await main.methods.createChain('100').send({
        from: accounts[0],gas:'1000000',
    });
    //taking the first element from the array
    const chainAddress = await main.methods.getDeployedChains().call()
    chain = await new web3.eth.Contract(JSON.parse(compiledChain.interface),
    chainAddress[0],
    );
})
describe('Chains',()=>{
    it('deploys main and each chain',()=>{
        assert.ok(main.options.address);
        // assert.ok(chain.options.address);
    });
    it('marks manager',async()=>{
        const manager = await chain.methods.manager().call();
        assert.equal(accounts[0],manager);
    });
    it('allows to contribute',async()=>{
        await chain.methods.buy().send({
            value:'200',
            from:accounts[1]
        });
        const isBuyer = await chain.methods.buyers(accounts[1]).call();
        assert(isBuyer);
    })
    // it('requires price',async()=>{
    //     try{
    //         await chain.methods.buy().send({
    //             value:'5', from: accounts[1]
    //         })
    //         assert(false);
    //     }catch(err){
    //         assert(err);
    //     }
    // });
});
