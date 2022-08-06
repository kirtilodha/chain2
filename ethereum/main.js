import web3 from './web3';
import MainChain from './build/MainChain.json';

const instance = new web3.eth.Contract(
    JSON.parse(MainChain.interface),
    '0xE5ad4722e7E4F0DC3b1F6A7f66674C5aBF4063E4'
);
export default instance;
