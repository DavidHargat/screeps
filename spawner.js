var harvester = require("harvester");
var builder   = require("builder");
var guard     = require("guard");

var harvest = function(base){
    var NAME = "Harvest_" + Memory.numHarvest.toString()
    base.createCreep([WORK, CARRY, MOVE], NAME, {role: "harvest"});
    Memory.numHarvest = Memory.numHarvest + 1;
};
var build = function(base){
    var NAME = "Builder_" + Memory.numBuild.toString()
    base.createCreep([WORK, WORK, CARRY, MOVE], NAME, {role: "build"});
    Memory.numBuild = Memory.numBuild + 1;
};
var guard = function(base){
    var NAME = "Guard_" + Memory.numGuard.toString()
    base.createCreep([TOUGH, ATTACK, MOVE, MOVE], NAME, {role: "guard"});
    Memory.numGuard = Memory.numGuard + 1;
};

module.exports.harvest = harvest;
module.exports.build = build;
module.exports.guard = guard;
