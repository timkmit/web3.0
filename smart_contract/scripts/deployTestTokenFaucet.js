const hre = require('hardhat');
const ethers = hre.ethers;

async function main() {
  const Token = await ethers.getContractFactory('TestToken');
  const token = await Token.deploy(); // Задеплоить токен
  console.log('Token deployed to:', token.address);

  const Faucet = await ethers.getContractFactory('TestTokenFaucet');
  const faucet = await Faucet.deploy(token.address, {gasLimit: 4000000}); // Задеплоить кран
  console.log('Faucet deployed to:', faucet.address);

  await token.transfer(faucet.address, ethers.utils.parseEther('1000')); // Перевести 1000 монет на адрес крана для начисления пользователям

  console.log('Done!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
