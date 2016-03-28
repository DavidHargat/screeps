var harvester = require("harvester");
var builder   = require("builder");
var guard     = require("guard");

module.exports.loop = function () {
  
  if(Memory.numHarvest == undefined){
      Memory.numHarvest = 0;
      Memory.numBuild = 0;
      Memory.numGuard = 0;
  }
  
  var types = {
      "harvest": harvester,
      "build":   builder,
      "guard":   guard
  };
  
  for(var name in Game.creeps){
      var creep = Game.creeps[name];
      var role  = creep.memory.role;
      
      if(types[role]){
          types[role].logic(creep);
      }else{
          creep.say(role);
      }
  }
  
};

