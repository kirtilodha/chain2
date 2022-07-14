import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3!== 'undefined'){ // running in browser and metamask is available

    web3 = new Web3(window.web3.currentProvider);

} else{
    //on the server or user doesn't have metamask
    const provider = new Web3.providers.HttpProvider( //providing our provider
        "https://rinkeby.infura.io/v3/a50273c548074e82b4b1e77976f16a5f"
    );
    web3 = new Web3(provider);
}
export default web3;