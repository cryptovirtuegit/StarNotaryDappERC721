const Migrations = artifacts.require("Migrations");

module.exports = function(deployer,networks,accounts) {
  console.log(accounts);
  //deployer.deploy(Migrations,{from: '0x2b36884421DBf2D589a2F96fdCA3a3bF0567Be05'});
  deployer.deploy(Migrations);
};
