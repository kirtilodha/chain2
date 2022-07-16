import web3 from './web3';
import MainChain from './build/MainChain.json';

const instance = new web3.eth.Contract(
    JSON.parse(MainChain.interface),
    '0xdde36737C9fdC84aE57F69269b70801aeF7516aF'
);
export default instance;
