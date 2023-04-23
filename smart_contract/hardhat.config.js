<<<<<<< HEAD
// https://eth-mainnet.g.alchemy.com/v2/-6MhhwuFUEltMG2JKMnw102o6MyNeuN6

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli:{
      url: 'https://eth-mainnet.g.alchemy.com/v2/-6MhhwuFUEltMG2JKMnw102o6MyNeuN6',
      accounts: ['50d7e2a32c3eab31b53cf8a0cb1231a385e448911beff7674eb1d26d864d815b']
    }
  }
}
=======
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
>>>>>>> 6751f1e0db0d6fc7ee4acbf4585863b94711b344
