import web3 from './web3';
import MainChain from './build/MainChain.json';

const instance = new web3.eth.Contract(
    JSON.parse(MainChain.interface),
    '0xf6420B5f897C611aC7955Cb31A53ec92C2BEfeff'
);
export default instance;
