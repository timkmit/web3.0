const ethers = require("hardhat").ethers;

async function main() {
  const [account] = await ethers.getSigners();

  await hre.network.provider.request({
    method: "alchemy_impersonateAccount",
    params: ["0xc9A79d0915Db2312854CF24A9cecF12fb43Aac08"]
  });

  const balance = ethers.utils.hexlify(ethers.utils.parseEther("5"));

  await hre.network.provider.send("hardhat_setBalance", [
    "0xc9A79d0915Db2312854CF24A9cecF12fb43Aac08",
    balance
  ]);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
