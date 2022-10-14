require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/PQhCmj4W_UYDUZw6npJ2C70bjzHGdtcY",
      accounts: ["9db955af943c1e5cb0c551771a642d6ebe5b6ab3797250434413cd60d7a6af37"]
    }
  }
};
