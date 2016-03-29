var harvester = require("harvester");
var builder   = require("builder");
var guard     = require("guard");
var heal      = require("heal");

module.exports.loop = function () {
  
  var types = {
      "harvest": harvester,
      "build":   builder,
      "guard":   guard,
	  "heal":    heal
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

