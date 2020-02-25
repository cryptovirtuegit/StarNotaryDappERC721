const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer,networks,accounts) {
  //deployer.deploy(StarNotary,,{from: '0x2b36884421DBf2D589a2F96fdCA3a3bF0567Be05'});
  deployer.deploy(StarNotary);
};
