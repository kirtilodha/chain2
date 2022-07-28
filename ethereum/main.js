import web3 from './web3';
import MainChain from './build/MainChain.json';

const instance = new web3.eth.Contract(
    JSON.parse(MainChain.interface),
    '0xc8BcCaD700115c28Bd141751e10092ea540F4ab3'
);
export default instance;
