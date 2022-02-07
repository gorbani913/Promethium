//const ConvertLib = artifacts.require("ConvertLib");
//const Radiant = artifacts.require("Radiant");
const Promethium = artifacts.require("Promethium");


module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, NovaKoin4);

  //deployer.deploy(Radiant);
  deployer.deploy(Promethium);
};
