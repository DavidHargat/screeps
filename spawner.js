var harvester = require("harvester");
var builder   = require("builder");
var guard     = require("guard");
var base      = require("base");

/*
 * role / body definitions
 */
var BODIES = {
	"harvest": [WORK, CARRY, MOVE],
	"build":   [WORK, WORK, MOVE],
	"guard":   [TOUGH, ATTACK, MOVE],
	"heal":    [HEAL, MOVE]
};

/*
 * Defines memory for keeping track
 * of how many of each 'role' we've created
 * so we can give them unique names based on
 * their index.
 */

var getRoleCounter = function(role){
	if(Memory.roleCounter === undefined)
		Memory.roleCounter = {};
	if(Memory.roleCounter[role] === undefined)
		Memory.roleCounter[role] = 0;
	return Memory.roleCounter[role];
};

var addRoleCounter = function(role){
	getRoleCounter(role);
	Memory.roleCounter[role] += 1;
};

var create = function(role){
	// error checkings
	if(BODIES[role] === undefined){
		console.log("Invalid Role: " + role);
		return false;
	}

	var spawn = base.getBase();
	var body = BODIES[role];
	var name = role + getRoleCounter(role).toString();

	var result = spawn.canCreateCreep(body, name);

	if(result == OK){
		spawn.createCreep(body, name, {role: role});
	}else{
		console.log("Failed To Create Creep.");
	}
};

module.exports.create = create;
