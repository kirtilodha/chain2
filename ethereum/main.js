import web3 from './web3';
import MainChain from './build/MainChain.json';

const instance = new web3.eth.Contract(
    JSON.parse(MainChain.interface),
    '0x663178e6F46f8a7467C607E08e51AC697A4424e3'
);
export default instance;
